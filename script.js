/* ===========================================================
   Swan Valley Brew Co. & Flea Market
   - Shows a live "open / closed" pill based on the store's local
     time (America/Chicago), independent of the visitor's timezone.
   - Highlights today's row in the hours card.
   Store hours: Tue–Mon 7 AM–5 PM, closed Sunday.
   =========================================================== */

(function () {
  // current footer year
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  // Get "now" as it is in Forsyth, MO (Central time), regardless of visitor location.
  function chicagoNow() {
    return new Date(
      new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })
    );
  }

  var now = chicagoNow();
  var day = now.getDay();                       // 0 = Sun … 6 = Sat
  var hour = now.getHours() + now.getMinutes() / 60;

  var OPEN_FROM = 7;   // 7 AM
  var OPEN_TO = 17;    // 5 PM
  var isOpen = day !== 0 && hour >= OPEN_FROM && hour < OPEN_TO;

  // status pill in the header
  var pill = document.getElementById('status');
  var txt = document.getElementById('statusText');
  if (pill && txt) {
    if (isOpen) {
      pill.classList.add('open');
      txt.textContent = 'Open now · closes 5 PM';
    } else {
      pill.classList.add('shut');
      if (day === 0) {
        txt.textContent = 'Closed Sundays · open Mon 7 AM';
      } else if (hour < OPEN_FROM) {
        txt.textContent = 'Opens today at 7 AM';
      } else {
        txt.textContent = 'Closed now · opens 7 AM';
      }
    }
  }

  // highlight today's row in the hours receipt
  var row = document.querySelector('.receipt .row[data-day="' + day + '"]');
  if (row) row.classList.add('today');
})();
