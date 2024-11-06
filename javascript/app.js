const menuButton = document.getElementById("menu-button");
const icons = document.getElementById("icons");

menuButton.addEventListener("click", () => {
  icons.classList.toggle("show");
});
