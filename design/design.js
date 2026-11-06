(function () {
  var rts = document.querySelector('.rts');
  if (!rts) return;
  var menu = rts.querySelector('.menu');
  var nav = rts.querySelector('.nav');
  if (menu && nav) {
    menu.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menu.setAttribute('aria-expanded', String(open));
      menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }
  rts.querySelectorAll('.pc-add').forEach(function (b) {
    b.addEventListener('click', function () {
      b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') === 'true' ? 'false' : 'true');
    });
  });
  rts.querySelectorAll('.sizes').forEach(function (g) {
    g.addEventListener('click', function (e) {
      var t = e.target.closest('.size');
      if (!t) return;
      g.querySelectorAll('.size').forEach(function (o) { o.setAttribute('aria-pressed', 'false'); });
      t.setAttribute('aria-pressed', 'true');
    });
  });
})();
