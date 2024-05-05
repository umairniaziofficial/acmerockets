const initApp = () => {
  const hamburger = document.getElementById("menu-hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
  };
  hamburger.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);
};


document.addEventListener("DOMContentLoaded",initApp);