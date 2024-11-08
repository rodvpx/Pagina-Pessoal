const menuButton = document.getElementById("menu-button");
const icons = document.getElementById("icons");

menuButton.addEventListener("click", () => {
  icons.classList.toggle("show");
});

const form = document.querySelector("form");

function validarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const mensagem = document.getElementById("mensagem");

  // Verifica se todos os campos estão preenchidos
  if (nome.value !== "" && email.value !== "" && mensagem.value !== "") {
    alert("E-mail enviado com sucesso!"); // Mensagem de sucesso
    form.reset(); // Limpa o formulário, caso deseje
  }
}

// Escutando o evento de envio do formulário
form.addEventListener("submit", validarFormulario);
