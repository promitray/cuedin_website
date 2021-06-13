document.addEventListener("DOMContentLoaded", () => {
  new Splide(".splide", {
    type: "loop",
    autoplay: true,
    height: 400,
    pauseOnHover: false,
    pauseOnFocus: false,
    interval: 6000,
  }).mount();
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

const services__question = document.querySelectorAll(".services-question");

services__question.forEach((e) => {
  e.addEventListener("click", function () {
    // let sibling = this.nextElementSibling;
    // console.log(sibling.style.display);
    // if (sibling.style.display == "none" || sibling.style.display == "") {
    //   sibling.style.display = "block";
    //   sibling.style.opacity = 1;
    // } else {
    //   sibling.style.display = "none";
    //   sibling.style.opacity = 0;
    // }

    let sibling = this.nextElementSibling;
    sibling.classList.toggle("services-answer--open");
  });
});
