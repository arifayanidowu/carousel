const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// set slide position
const setSlidePosition = (slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
};
// arrange slides next to each other
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// Prev button click
prevButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  moveToSlide(track, currentSlide, prevSlide);
});

// Next button click
nextButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  // Move to next slide
  moveToSlide(track, currentSlide, nextSlide);
});

// Nav indicators
dotsNav.addEventListener("click", e => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);

  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
});
