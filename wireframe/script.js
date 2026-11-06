(function () {
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('primary-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }

  var panels = document.querySelectorAll('.filters-panel');
  var mq = window.matchMedia('(min-width: 960px)');
  function syncPanels() {
    panels.forEach(function (p) { p.open = mq.matches; });
  }
  if (panels.length) {
    syncPanels();
    if (mq.addEventListener) mq.addEventListener('change', syncPanels);
  }

  document.querySelectorAll('.options').forEach(function (group) {
    group.addEventListener('click', function (e) {
      var t = e.target.closest('.option');
      if (!t) return;
      group.querySelectorAll('.option').forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
      t.setAttribute('aria-pressed', 'true');
    });
  });
})();
