const carousel = document.querySelector('.carousel');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex * 300; // Ancho de cada elemento del carrusel
    carousel.style.transform = `translateX(${offset}px)`;
}

// Inicializar el carrusel
updateCarousel();

// Función para avanzar automáticamente el carrusel cada 5 segundos
function autoAdvance() {
    let num = 1;
    if (currentIndex < carousel.children.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
    console.log(num)
    num++
}

// Llamar a autoAdvance automáticamente cada 5 segundos
setInterval(autoAdvance, 5000);
