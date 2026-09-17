// Navegação mobile simples e reutilizável.
const header = document.querySelector('header');
document.querySelector('.menu').addEventListener('click', () => header.classList.toggle('open'));
// Simula a confirmação; numa versão real, os dados iriam para uma API.
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('.message').textContent = 'Solicitação registrada! A equipe entrará em contato.';
});
