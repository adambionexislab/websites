/* Agriturismo Rosita - main.js */

/* Mobile nav toggle */
(function () {
  var btn = document.querySelector('.nav-hamburger');
  var links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.site-nav')) links.classList.remove('open');
  });
})();

/* Scroll reveal */
(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  var items = document.querySelectorAll('[data-reveal]');
  if (!items.length) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  items.forEach(function (el) { io.observe(el); });
})();

/* Lightbox */
(function () {
  var overlay = document.getElementById('lightbox');
  var img     = document.getElementById('lightbox-img');
  var closeEl = document.getElementById('lightbox-close');
  var prevEl  = document.getElementById('lightbox-prev');
  var nextEl  = document.getElementById('lightbox-next');
  if (!overlay || !img) return;

  var srcs = [];
  var cur  = 0;

  document.querySelectorAll('[data-lightbox]').forEach(function (el, i) {
    srcs.push(el.getAttribute('data-lightbox'));
    el.addEventListener('click', function (e) {
      e.preventDefault();
      cur = i;
      open(srcs[cur]);
    });
  });

  function open(src) {
    img.src = src;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function close() {
    overlay.classList.remove('open');
    img.src = '';
    document.body.style.overflow = '';
  }
  function prev() { cur = (cur - 1 + srcs.length) % srcs.length; img.src = srcs[cur]; }
  function next() { cur = (cur + 1) % srcs.length; img.src = srcs[cur]; }

  closeEl && closeEl.addEventListener('click', close);
  prevEl  && prevEl.addEventListener('click', prev);
  nextEl  && nextEl.addEventListener('click', next);
  overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function (e) {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'Escape')     close();
    if (e.key === 'ArrowLeft')  prev();
    if (e.key === 'ArrowRight') next();
  });
})();

/* Date inputs submit directly via name="arrival_date" / "departure_date" to Formspree */

/* Language switcher - static site: only Italian available */
(function () {
  var sel = document.getElementById('lang-select');
  if (!sel) return;
  sel.addEventListener('change', function () {
    /* Multi-language requires server-side rendering. Reset to Italian. */
    sel.value = 'ita';
  });
})();

/* Direction tabs */
(function () {
  var tabs   = document.querySelectorAll('.dir-tab');
  var panels = document.querySelectorAll('.dir-panel');
  if (!tabs.length) return;
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      var target = tab.getAttribute('data-tab');
      tabs.forEach(function (t) { t.classList.remove('active'); });
      panels.forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      var panel = document.getElementById('tab-' + target);
      if (panel) panel.classList.add('active');
    });
  });
})();

/* Cookie banner */
(function () {
  var banner = document.getElementById('cookie-banner');
  var btn    = document.getElementById('cookie-accept');
  if (!banner) return;
  if (localStorage.getItem('rosita-cookie-ok')) {
    banner.classList.add('hidden');
    return;
  }
  banner.classList.remove('hidden');
  btn && btn.addEventListener('click', function () {
    localStorage.setItem('rosita-cookie-ok', '1');
    banner.classList.add('hidden');
  });
})();
