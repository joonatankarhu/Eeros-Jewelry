const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const navPosition = document.querySelector(".nav-toggle");
const navIcon = document.querySelector(".mobile-nav-icon");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
  navIcon.classList.toggle("black-nav-btn");
  navPosition.classList.toggle("nav-btn-position");
});