// Controla o menu no celular sem depender de bibliotecas externas.
const header = document.querySelector('header');
const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', () => header.classList.toggle('open'));
// Fecha o menu após o usuário escolher uma seção.
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => header.classList.remove('open')));
