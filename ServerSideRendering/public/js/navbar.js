// /js/navbar.js
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobile-menu");
  const navList = document.querySelector(".nav-list");

  if (mobileMenu && navList) {
    mobileMenu.addEventListener("click", () => {
      navList.classList.toggle("active");
    });
  }
});
