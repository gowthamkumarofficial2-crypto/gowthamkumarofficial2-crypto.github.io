document.documentElement.classList.add('js');
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.about,.log,.subscribe,.entry,.post').forEach(function (el) {
    el.classList.add('reveal'); io.observe(el);
  });
}
