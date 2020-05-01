const setIntersectionObserver = (targetsClass, callbackOnIntersection) => {
  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callbackOnIntersection(entry.target);

          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '0px',
      threshold: 0.25
    }
  );

  document.querySelectorAll(targetsClass).forEach(target => {
    observer.observe(target);
  });
};

export { setIntersectionObserver };
