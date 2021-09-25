document.addEventListener("DOMContentLoaded", () => {
  new Flickity(".testimonials-carousel", {
      cellAlign: 'left',
      contain: true,
      wrapAround: true
      // adaptiveHeight: true,
  });
});

const menu__div = document.querySelector(".menu");
const nav__ul = document.querySelector(".nav-ul");

menu__div.addEventListener("click", () => {
  nav__ul.classList.toggle("nav-open");
});

const nav__li = document.querySelectorAll(".nav-li");

nav__li.forEach((e) => {
  e.addEventListener("click", function () {
    nav__ul.classList.remove("nav-open");
  });
});
