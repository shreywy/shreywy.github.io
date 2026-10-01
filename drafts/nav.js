// Draft switcher. Not part of any design, just a way to flip between drafts.
(function () {
  const drafts = [
    ['01-broadsheet', 'Broadsheet'],
    ['02-monograph', 'Monograph'],
    ['03-card-catalog', 'Card Catalog'],
    ['04-letterpress', 'Letterpress'],
    ['05-specimen', 'Specimen'],
    ['06-timetable', 'Timetable'],
    ['07-gallery', 'Gallery'],
    ['08-book', 'The Book'],
    ['09-drafting', 'Drafting Sheet'],
    ['10-ledger', 'Ledger'],
  ];
  const here = location.pathname.split('/').pop().replace('.html', '');
  const i = drafts.findIndex(d => d[0] === here);
  if (i < 0) {
    // Round-two drafts sit outside the numbered set.
    const el = document.createElement('a');
    el.href = 'index.html'; el.textContent = 'All drafts';
    Object.assign(el.style, { position:'fixed', left:'12px', bottom:'12px', zIndex:9999, font:'500 12px/1 ui-sans-serif, system-ui, sans-serif',
      background:'rgba(20,20,20,.82)', color:'#eee', borderRadius:'999px', padding:'11px 14px', textDecoration:'none' });
    document.addEventListener('DOMContentLoaded', () => document.body.appendChild(el));
    return;
  }
  const prev = drafts[(i + drafts.length - 1) % drafts.length][0] + '.html';
  const next = drafts[(i + 1) % drafts.length][0] + '.html';

  const el = document.createElement('div');
  el.setAttribute('aria-label', 'Draft navigation');
  el.innerHTML =
    `<a href="${prev}" title="Previous ([)">&#8249;</a>` +
    `<a href="index.html" class="dn-name">${String(i + 1).padStart(2, '0')} / 10 &nbsp;${drafts[i][1]}</a>` +
    `<a href="${next}" title="Next (])">&#8250;</a>`;
  Object.assign(el.style, {
    position: 'fixed', left: '12px', bottom: '12px', zIndex: 9999,
    display: 'flex', alignItems: 'center', gap: '2px',
    font: '500 12px/1 ui-sans-serif, system-ui, sans-serif',
    background: 'rgba(20,20,20,.82)', color: '#eee', borderRadius: '999px',
    padding: '4px', backdropFilter: 'blur(6px)', letterSpacing: '.01em',
  });
  el.querySelectorAll('a').forEach(a => Object.assign(a.style, {
    color: 'inherit', textDecoration: 'none', padding: '7px 10px', borderRadius: '999px',
  }));
  document.addEventListener('DOMContentLoaded', () => document.body.appendChild(el));
  document.addEventListener('keydown', e => {
    if (e.target.closest('input, textarea')) return;
    if (e.key === '[') location.href = prev;
    if (e.key === ']') location.href = next;
  });
})();
