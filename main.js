const toggleb = document.querySelector('.navbar__toggleb');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

toggleb.addEventListener('click', () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});
