let currentIndex = 0; // Índice atual do slider
const materias = document.getElementById("materias");
const itemsToShow = 9; // Número de itens a serem exibidos no slider
const totalItems = materias.children.length; // Total de matérias
const prevButton = document.querySelector(".prev"); // Botão anterior
const nextButton = document.querySelector(".next"); // Botão próximo

function updateSlider() {
  const offset = -currentIndex * (265 / itemsToShow); // Cálculo do deslocamento
  // if (offset < -50) {
  // }
  materias.style.transform = `translateX(${offset}%)`; // Aplica o deslocamento
  updateButtons(); // Atualiza a visibilidade dos botões
}

prevButton.addEventListener("click", () => {
  console.log(-currentIndex * (100 / itemsToShow));
  console.log(itemsToShow);
});

function moveSlider(direction) {
  // Atualiza o índice com base na direção
  if (direction === 1) {
    if (currentIndex < totalItems - itemsToShow) {
      currentIndex++; // Move para a direita
    }
  } else if (direction === -1) {
    if (currentIndex > 0) {
      currentIndex--; // Move para a esquerda
    }
  }
  updateSlider(); // Atualiza o slider
}

function updateButtons() {
  // Oculta o botão anterior se estiver no início
  if (currentIndex === 0) {
    prevButton.style.display = "none";
  } else {
    prevButton.style.display = "block";
  }

  if (currentIndex >= totalItems - itemsToShow) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }
}

// Inicializa a visibilidade dos botões
updateButtons();
