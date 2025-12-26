// Back to top button visibility and smooth scroll
(function() {
  var btn = document.getElementById('back-to-top');
  if (!btn) return;

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (y > 300) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();


