const navToggle = document.querySelector(".nav__toggle");
const list = document.querySelector(".nav__list");

navToggle.addEventListener("click", (e) => {
  console.log(list.classList);
  e.target.classList.toggle("nav__toggle--rotate");
  list.classList.toggle("nav__show--list");
});
