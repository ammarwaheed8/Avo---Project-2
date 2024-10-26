// Image Transition for First Section JS Script
const slides = document.querySelectorAll('.carousel-slide');
const fadeOverlay = document.querySelector('.white-fade');
let currentIndex = 0;

function moveCarousel() {
  // Remove the active class from the current slide
  slides[currentIndex].classList.remove('active');

  // Move to the next slide and loop back to the start if necessary
  currentIndex = (currentIndex + 1) % slides.length;

  // Add the active class to the new slide
  slides[currentIndex].classList.add('active');

  // Quick white fade effect
  fadeOverlay.style.background = 'rgba(255, 255, 255, 1)';
  setTimeout(() => {
    fadeOverlay.style.background = 'rgba(255, 255, 255, 0)';
  }, 400); // White fade for 0.4 seconds
}

// Infinite loop with interval for continuous sliding
setInterval(moveCarousel, 5000); // 5-second interval
