// Portfolio backend: the guestbook, plus a light visit log.
// Deployed as a web app (execute as me, anyone can access). The site posts form-encoded fields.
//   guestbook (default): name, email, message, website (honeypot). Logged and emailed so I can reply.
//   kind=visit: one per browsing session. Logged only.
//   kind=event: what a visitor opened or clicked. Logged only.
// Everything is logged to the "Portfolio Logs" sheet.

const LOG_ID = '1ytpCslIe9pZdrV7okx_vAHT-KQEVulDcH9OfR3PtEXE';
const TO = 'shrey.d.mistry@gmail.com';
const TZ = 'America/Toronto';
const DAILY_CAP = 40; // guestbook emails, well under the consumer MailApp quota

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

  tab_('Guestbook', ['When', 'Name', 'Email', 'Note']).appendRow([stamp_(), name, email, message]);
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
  // Location is coarse (city level), looked up in the visitor's browser. The IP address itself is never sent or stored.
  const header = ['When (Toronto)', 'Visit', 'From', 'Device', 'Screen', 'Language', 'Their timezone', 'Landed on', 'City', 'Region', 'Country', 'Network'];
  const sh = tab_('Visits', header);
  if (sh.getLastColumn() < header.length) sh.getRange(1, 1, 1, header.length).setValues([header]).setFontWeight('bold');
  sh.appendRow([stamp_(), id, source_(clean_(p.ref, 300)), device_(clean_(p.ua, 400)), clean_(p.screen, 20), clean_(p.lang, 20), clean_(p.tz, 60), clean_(p.path, 200),
    clean_(p.city, 80), clean_(p.region, 80), clean_(p.country, 80), clean_(p.net, 120)]);
  return ok_();
}

function event_(p) {
  const id = clean_(p.id, 40), what = clean_(p.what, 200);
  if (!id || !what) return ok_();
  tab_('Clicks', ['When (Toronto)', 'Visit', 'What']).appendRow([stamp_(), id, what]);
  return ok_();
}

// A tab in the log sheet by name, created with a frozen header row the first time.
// The sheet starts with one empty "Sheet1", which becomes the first tab asked for.
function tab_(name, header) {
  const ss = SpreadsheetApp.openById(LOG_ID);
  let sh = ss.getSheetByName(name);
  if (!sh) {
    const first = ss.getSheets()[0];
    if (first.getName() === 'Sheet1' && first.getLastRow() === 0) { sh = first; sh.setName(name) }
    else sh = ss.insertSheet(name);
    sh.appendRow(header); sh.setFrozenRows(1); sh.getRange(1, 1, 1, header.length).setFontWeight('bold');
  }
  return sh;
}

// Toronto time as plain text, so it reads the same whatever the sheet's own timezone is.
function stamp_() { return Utilities.formatDate(new Date(), TZ, 'yyyy-MM-dd HH:mm:ss') }

// How many times today a counter has been bumped, including this one.
function count_(prefix) {
  const cache = CacheService.getScriptCache();
  const key = prefix + Utilities.formatDate(new Date(), TZ, 'yyyyMMdd');
  const n = Number(cache.get(key) || 0) + 1;
  cache.put(key, String(n), 21600);
  return n;
}

function source_(ref) {
  if (!ref) return 'direct link or bookmark';
  const host = ref.replace(/^https?:\/\//, '').split('/')[0].replace(/^www\./, '');
  if (/linkedin|lnkd\.in/.test(host)) return 'LinkedIn';
  if (/google\./.test(host)) return 'Google';
  if (/github/.test(host)) return 'GitHub';
  if (/t\.co$|twitter|x\.com/.test(host)) return 'X';
  if (/shreywy\.github\.io/.test(host)) return 'within the site';
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
