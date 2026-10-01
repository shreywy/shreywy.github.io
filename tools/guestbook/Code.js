// Portfolio guestbook: receives notes from the site, logs them to a Sheet, and emails them to me.
// Deployed as a web app (execute as me, anyone can access). The site posts name, email, message.

const TO = 'shrey.d.mistry@gmail.com';
const DAILY_CAP = 40; // well under the consumer MailApp quota

function doPost(e) {
  const p = (e && e.parameter) || {};
  if (p.website) return ok_(); // honeypot: people never see this field
  const name = clean_(p.name, 100), email = clean_(p.email, 200), message = clean_(p.message, 4000);
  if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return ok_();

  const cache = CacheService.getScriptCache();
  const key = 'gb_' + Utilities.base64EncodeWebSafe(email.toLowerCase()).slice(0, 200);
  if (cache.get(key)) return ok_(); // one note per address per minute
  cache.put(key, '1', 60);

  const today = 'gb_day_' + Utilities.formatDate(new Date(), 'America/Toronto', 'yyyyMMdd');
  const sent = Number(cache.get(today) || 0);
  sheet_().appendRow([new Date(), name, email, message]);
  if (sent < DAILY_CAP) {
    cache.put(today, String(sent + 1), 21600);
    MailApp.sendEmail({
      to: TO, replyTo: email, name: 'Portfolio guestbook',
      subject: 'Guestbook: ' + name,
      body: message + '\n\n' + name + ' <' + email + '>\nReply to this email to answer them.',
    });
  }
  return ok_();
}

// Run once from the editor to grant permissions and create the Sheet. Sends a test email.
function setup() {
  const s = sheet_();
  MailApp.sendEmail(TO, 'Guestbook is set up', 'Notes will be logged here: ' + s.getParent().getUrl());
}

function sheet_() {
  const props = PropertiesService.getScriptProperties();
  const id = props.getProperty('SHEET_ID');
  if (id) return SpreadsheetApp.openById(id).getSheets()[0];
  const ss = SpreadsheetApp.create('Portfolio guestbook');
  ss.getSheets()[0].appendRow(['When', 'Name', 'Email', 'Note']);
  props.setProperty('SHEET_ID', ss.getId());
  return ss.getSheets()[0];
}

function clean_(v, max) { return String(v || '').trim().slice(0, max) }

function ok_() {
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
