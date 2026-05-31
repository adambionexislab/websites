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

/* Date picker -> hidden split fields (contact form) */
(function () {
  function wire(pickerId, d, m, y) {
    var picker = document.getElementById(pickerId);
    if (!picker) return;
    picker.addEventListener('change', function () {
      var val = picker.value; /* YYYY-MM-DD */
      if (!val) return;
      var parts = val.split('-');
      var fDay  = document.querySelector('[name="' + d + '"]');
      var fMon  = document.querySelector('[name="' + m + '"]');
      var fYear = document.querySelector('[name="' + y + '"]');
      if (fDay)  fDay.value  = parts[2];
      if (fMon)  fMon.value  = parts[1];
      if (fYear) fYear.value = parts[0];
    });
  }
  wire('date-arrival',   'doad', 'doam', 'doay');
  wire('date-departure', 'dodd', 'dodm', 'dody');
})();

/* Language switcher */
(function () {
  var sel = document.getElementById('lang-select');
  if (!sel) return;
  sel.addEventListener('change', function () {
    var lang = sel.value;
    var page = window.location.pathname.split('/').pop() || 'index.php';
    if (!page || page === '') page = 'index.php';
    window.location.href = page + '?lang=' + lang;
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
