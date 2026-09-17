// Alterna a navegação em telas pequenas.
const header = document.querySelector('header');
document.querySelector('.menu').addEventListener('click', () => header.classList.toggle('open'));
// Demonstra o envio do formulário sem coletar dados reais.
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('.feedback').textContent = 'Cadastro demonstrativo enviado com sucesso!';
  event.target.reset();
});
