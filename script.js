const menuBtn = document.querySelector(".hamburger");
const navigationLinks = document.querySelector(".hamburger-links");
const closeBtn = document.querySelector(".fa");
const mobilebkgrnd = document.querySelector(".top-bar");
const body = document.querySelector("body");


menuBtn.addEventListener("click", function () {
  navigationLinks.classList.add("hamburger-links--open");
  mobilebkgrnd.classList.add("top-bar--open");
  body.classList.add("body--overflow");
});

closeBtn.addEventListener("click", function () {
  navigationLinks.classList.remove("hamburger-links--open");
  mobilebkgrnd.classList.remove("top-bar--open");
  body.classList.remove("body--overflow");
});
