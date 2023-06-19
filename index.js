// 

const section1 = document.querySelector('.section1');
const nav = document.querySelector('.navbar');
const navHeight = nav.getBoundingClientRect().height

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const options = {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`
};

const headerObserver = new IntersectionObserver(stickyNav, options);

headerObserver.observe(section1);
