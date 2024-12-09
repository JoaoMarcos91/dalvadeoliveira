// Seleciona o container do conteúdo
const conteudo = document.getElementById("conteudo");

// Função para carregar o conteúdo de uma seção
function carregarConteudo(section) {
  const template = document.getElementById(section);
  if (template) {
    conteudo.innerHTML = "";
    conteudo.appendChild(template.content.cloneNode(true));
  }
}

// Adiciona evento de clique nos botões de navegação
document.querySelectorAll(".nav-button").forEach(button => {
  button.addEventListener("click", () => {
    const section = button.getAttribute("data-section");
    carregarConteudo(section);
  });
});

// Carrega automaticamente a Home quando a página é aberta
document.addEventListener("DOMContentLoaded", () => {
  carregarConteudo("inicio");
});
