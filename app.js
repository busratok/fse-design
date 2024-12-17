const navToggle = document.querySelector(".nav__toggle");
const list = document.querySelector(".nav__list");

// Main Menu Toggle
navToggle.addEventListener("click", (e) => {
  console.log(list.classList);
  e.target.classList.toggle("nav__toggle--rotate");
  list.classList.toggle("nav__show--list");
});

// Submenu Toggle
const submenus = document.querySelectorAll(".nav__item--has-submenu");

submenus.forEach((submenu) => {
  submenu.addEventListener("click", (e) => {
    const childSubmenu = submenu.querySelector(".nav__submenu");
    if (childSubmenu) {
      childSubmenu.classList.toggle("nav__submenu--show");
    }
  });
});
