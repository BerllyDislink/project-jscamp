const menuToggle = document.getElementById('menu-toggle');
const navLogin = document.getElementById('nav-login');
const buttonNav = document.querySelector(".button-nav");

menuToggle.addEventListener('click', () => {
  navLogin.classList.toggle('active');
  buttonNav.classList.toggle('active');
});
