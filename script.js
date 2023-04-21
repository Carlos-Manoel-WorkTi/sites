const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const numItems = items.length;
let position = 0;

function setCarouselWidth() {
  const itemWidth = carousel.offsetWidth;
  const carouselWidth = itemWidth * numItems;
  carousel.style.width = carouselWidth + 'px';
  items.forEach(item => {
    item.style.width = itemWidth + 'px';
  });
}

setCarouselWidth();

const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

prevButton.addEventListener('click', () => {
  position += items[0].offsetWidth;
  position = Math.min(position, 0);
  carousel.style.transform = `translateX(${position}px)`;
});

nextButton.addEventListener('click', () => {
  position -= items[0].offsetWidth;
  position = Math.max(position, -itemWidth * (numItems - 1));
  carousel.style.transform = `translateX(${position}px)`;
});

window.addEventListener('resize', () => {
  setCarouselWidth();
});
