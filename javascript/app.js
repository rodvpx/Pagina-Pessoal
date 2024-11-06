window.addEventListener('scroll', function() {
  const searchBar = document.getElementById('search-bar');
  const sections = document.querySelectorAll('section');

  // Verifica a posição de rolagem
  if (window.scrollY > 100) {
    searchBar.classList.add('fixed'); // Adiciona a classe 'fixed' quando rola
    sections.forEach(section => {
      section.classList.add('visible'); // Mostra o conteúdo
    });
  } else {
    searchBar.classList.remove('fixed'); // Remove a classe quando volta ao topo
    sections.forEach(section => {
      section.classList.remove('visible'); // Esconde o conteúdo
    });
  }
});
