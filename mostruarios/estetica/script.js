// Abre e fecha o menu para garantir boa navegação no celular.
const header = document.querySelector('header');
document.querySelector('.menu').addEventListener('click', () => header.classList.toggle('open'));
// Remove o menu da tela depois que uma opção for selecionada.
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => header.classList.remove('open')));
