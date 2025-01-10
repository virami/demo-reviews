let currentIndex = 0;

const wrapper = document.querySelector('.reviews-wrapper');
const cards = document.querySelectorAll('.review-card');

function updatePosition() {
    const cardWidth = cards[0].offsetWidth + 20; // 20 - це загальна ширина margin
    wrapper.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

function handleSwipe(direction) {
    const cardCount = cards.length;

    if (direction === 'left') {
        currentIndex = Math.min(currentIndex + 1, cardCount - 1);
    } else if (direction === 'right') {
        currentIndex = Math.max(currentIndex - 1, 0);
    }

    updatePosition();
}

// Додаємо події для прокрутки по миші
let startX;
wrapper.addEventListener('mousedown', (e) => {
    startX = e.pageX;
});

wrapper.addEventListener('mouseup', (e) => {
    const endX = e.pageX;
    if (startX > endX + 50) {
        handleSwipe('left'); // Перегорнути вліво
    } else if (startX + 50 < endX) {
        handleSwipe('right'); // Перегорнути вправо
    }
});

// Додаємо події для прокрутки по дотикам
wrapper.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
});

wrapper.addEventListener('touchend', (e) => {
    const endX = e.changedTouches[0].pageX;
    if (startX > endX + 50) {
        handleSwipe('left'); // Перегорнути вліво
    } else if (startX + 50 < endX) {
        handleSwipe('right'); // Перегорнути вправо
    }
});
