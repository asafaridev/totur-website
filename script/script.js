// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const togglebutton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobilemenu = document.querySelector(".navbar .mobile-menu-item");

  togglebutton.addEventListener("click", function () {
    mobilemenu.classList.toggle("active");
  });

});

// navbar scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});