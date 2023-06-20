// 
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const navbarToggler = document.querySelector('.navbar-toggler');
      if (window.innerWidth < 992) {
        navbarToggler.click();
      }
    });
  });
});


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


// reveal sections
const allSections = document.querySelectorAll('.section')
const revealSection = function (entries, observer) {
  const [entry] = entries
  if(!entry.isIntersecting) return
  entry.target.classList.remove('section--hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection,
  {
    root:null,
    threshold:0.15
  })

  allSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add("section--hidden")
  })