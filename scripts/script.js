// Activate Library
AOS.init({
  delay: 200,
  duration: 1500,
  once: false,
});

document.addEventListener("DOMContentLoaded", function () {
  // Navbar mobile
  const toggleButton = document.querySelector(".navbar__mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar__mobile-menu-items");

  toggleButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar--scroll");
  } else {
    navbar.classList.remove("navbar--scroll");
  }
});

// set year
date.innerHTML = new Date().getFullYear();
