const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

const main = () => {
  if (!window.resize) {
    navSlide();
  } else {
    navSlideHide();
  }
}

const navSlide = () => {
  burger.addEventListener('click', () => {
    // toggle navigation
    nav.classList.toggle('nav-active');

    // animation links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${(index / 7) + 0.4}s`;
      }
    });

    // burger animation
    burger.classList.toggle('toggle');
  });
}

const navSlideHide = () => {
  burger.style.display = 'none';
  nav.style.display = 'none';
  navLinks.style.display = 'none';
  navLinks.forEach((link, index) => {
    link.style.animation = '';
    link.style.display = 'none';
  })
}

main();