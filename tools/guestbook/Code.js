// Portfolio backend: the guestbook, plus a light visit log.
// Deployed as a web app (execute as me, anyone can access). The site posts form-encoded fields.
//   guestbook (default): name, email, message, website (honeypot)
//   kind=visit: one per browsing session; logged and emailed to me
//   kind=event: what a visitor opened or clicked; logged only

const TO = 'shrey.d.mistry@gmail.com';
const TZ = 'America/Toronto';
const DAILY_CAP = 40; // guestbook emails, well under the consumer MailApp quota
const VISIT_CAP = 40; // visit emails per day; visits past this are still logged

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.kind === 'visit') return visit_(p);
  if (p.kind === 'event') return event_(p);
  return guestbook_(p);
}

function guestbook_(p) {
  if (p.website) return ok_(); // honeypot: people never see this field
  const name = clean_(p.name, 100), email = clean_(p.email, 200), message = clean_(p.message, 4000);
  if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return ok_();

  const cache = CacheService.getScriptCache();
  const key = 'gb_' + Utilities.base64EncodeWebSafe(email.toLowerCase()).slice(0, 200);
  if (cache.get(key)) return ok_(); // one note per address per minute
  cache.put(key, '1', 60);

  sheet_('Notes', ['When', 'Name', 'Email', 'Note']).appendRow([new Date(), name, email, message]);
  if (count_('gb_day_') <= DAILY_CAP) {
    MailApp.sendEmail({
      to: TO, replyTo: email, name: 'Portfolio guestbook',
      subject: 'Guestbook: ' + name,
      body: message + '\n\n' + name + ' <' + email + '>\nReply to this email to answer them.',
    });
  }
  return ok_();
}

function visit_(p) {
  const id = clean_(p.id, 40);
  if (!id) return ok_();
  const cache = CacheService.getScriptCache();
  if (cache.get('v_' + id)) return ok_(); // same session already counted
  cache.put('v_' + id, '1', 21600);

  const now = new Date();
  const ref = source_(clean_(p.ref, 300));
  const device = device_(clean_(p.ua, 400));
  const row = [now, id, ref, device, clean_(p.screen, 20), clean_(p.lang, 20), clean_(p.tz, 60), clean_(p.path, 200)];
  sheet_('Visits', ['When', 'Visit', 'From', 'Device', 'Screen', 'Language', 'Timezone', 'Landed on']).appendRow(row);

  if (count_('v_day_') <= VISIT_CAP) {
    const when = Utilities.formatDate(now, TZ, "EEE MMM d, yyyy 'at' h:mm a z");
    MailApp.sendEmail({
      to: TO, name: 'Portfolio visits',
      subject: 'Someone opened your portfolio (' + ref + ')',
      body: 'When: ' + when + '\nFrom: ' + ref + '\nDevice: ' + device + '\nScreen: ' + row[4] +
        '\nLanguage: ' + row[5] + '\nTheir timezone: ' + row[6] + '\nLanded on: ' + row[7] +
        '\n\nWhat they open is logged in the Clicks tab of the Portfolio guestbook sheet, under visit ' + id + '.',
    });
  }
  return ok_();
}

function event_(p) {
  const id = clean_(p.id, 40), what = clean_(p.what, 200);
  if (!id || !what) return ok_();
  sheet_('Clicks', ['When', 'Visit', 'What']).appendRow([new Date(), id, what]);
  return ok_();
}

// Run once from the editor to grant permissions and create the Sheet. Sends a test email.
function setup() {
  const s = sheet_('Notes', ['When', 'Name', 'Email', 'Note']);
  MailApp.sendEmail(TO, 'Guestbook is set up', 'Notes will be logged here: ' + s.getParent().getUrl());
}

function book_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('SHEET_ID');
  if (id) return SpreadsheetApp.openById(id);
  const ss = SpreadsheetApp.create('Portfolio guestbook');
  props.setProperty('SHEET_ID', ss.getId());
  return ss;
}

// A tab by name, created with a header row the first time. The original notes tab is the first sheet.
function sheet_(name, header) {
  const ss = book_();
  let sh = ss.getSheetByName(name);
  if (!sh && name === 'Notes') {
    sh = ss.getSheets()[0];
    if (sh.getName() !== 'Notes') sh.setName('Notes');
    if (sh.getLastRow() === 0) sh.appendRow(header);
  }
  if (!sh) { sh = ss.insertSheet(name); sh.appendRow(header); sh.setFrozenRows(1) }
  return sh;
}

// How many times today a counter has been bumped, including this one.
function count_(prefix) {
  const cache = CacheService.getScriptCache();
  const key = prefix + Utilities.formatDate(new Date(), TZ, 'yyyyMMdd');
  const n = Number(cache.get(key) || 0) + 1;
  cache.put(key, String(n), 21600);
  return n;
}

function source_(ref) {
  if (!ref) return 'a direct link or bookmark';
  const host = ref.replace(/^https?:\/\//, '').split('/')[0].replace(/^www\./, '');
  if (/linkedin|lnkd\.in/.test(host)) return 'LinkedIn';
  if (/google\./.test(host)) return 'Google';
  if (/github/.test(host)) return 'GitHub';
  if (/t\.co$|twitter|x\.com/.test(host)) return 'X';
  if (/shreywy\.github\.io/.test(host)) return 'a link within the site';
  return host;
}

function device_(ua) {
  const os = /iPhone/.test(ua) ? 'iPhone' : /iPad/.test(ua) ? 'iPad' : /Android/.test(ua) ? 'Android' :
    /Mac OS X/.test(ua) ? 'Mac' : /Windows/.test(ua) ? 'Windows' : /Linux/.test(ua) ? 'Linux' : 'unknown device';
  const browser = /Edg\//.test(ua) ? 'Edge' : /OPR\//.test(ua) ? 'Opera' : /Firefox\//.test(ua) ? 'Firefox' :
    /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'a browser';
  return os + ', ' + browser;
}

function clean_(v, max) { return String(v || '').trim().slice(0, max) }

function ok_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
