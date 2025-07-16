


const hamButton = document.querySelector('#menu');
const navMenu = document.querySelector('nav ul');

hamButton.addEventListener('click', () => {
  hamButton.classList.toggle('open');
  navMenu.classList.toggle('open');
});
