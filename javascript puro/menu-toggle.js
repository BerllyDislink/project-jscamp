document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navLogin = document.getElementById('nav-login');
  const buttonNav = document.querySelector(".button-nav");

  // Verificamos que los elementos existan antes de agregar eventos
  if (menuToggle && navLogin && buttonNav) {
    menuToggle.addEventListener('click', () => {
      navLogin.classList.toggle('active');
      buttonNav.classList.toggle('active');
    });
  } 
});
