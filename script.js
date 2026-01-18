let slideIndex = 0;
showSlides();

// next/prev control
function nextSlide() {
  slideIndex++;
  showSlides();
  timeRamaining = _timeRamaining; // reset timer
}

function prevSlide() {
  slideIndex--;
  showSlides();
  timeRamaining = _timeRamaining;
}

// Thumbnail image controls 
function currentSlide(n) {
  slideIndex = n - 1;
  showSlides();
  timeRamaining = _timeRamaining;
}

function showSlides() {
  let slides = document.querySelectorAll('.slides');
  let dots = document.querySelectorAll('.dots');

  if (slideIndex > slides.length - 1) slideIndex = 0;
  if (slideIndex < 0) slideIndex = slides.length - 1;

  // hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // show one slide based on index number
  slides[slideIndex].style.display = 'block';

  dots.forEach((dot) => {
    dot.classList.remove('active');
  });

  dots[slideIndex].classList.add('active');
}

// autoplay slides 
let timeRamaining = 7; // sec
const _timeRamaining = timeRamaining;

// this function runs every 1 second

setInterval(() => {
  timeRamaining--;

  if (timeRamaining < 1) {
    nextSlide();
    timeRamaining = _timeRamaining; // reset timer
  }
}, 1000); // 1sec