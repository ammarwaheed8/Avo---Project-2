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

// Section one projects counter on reload JS  Script
const counterElement = document.getElementById("counter");
        let count = 1;
        const target = 400;
        const speed = 5;

        function updateCounter() {
            counterElement.innerText = count;
            if (count < target) {
                count++;
                setTimeout(updateCounter, speed);
            }
        }
window.onload = updateCounter;

// Reveal on scroll Effect
document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const revealOnScroll = () => {
      const windowHeight = window.innerHeight;

      reveals.forEach(reveal => {
          const revealTop = reveal.getBoundingClientRect().top;

          if (revealTop < windowHeight - 100) {
              reveal.classList.add('active');
          }
      });
  };

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
});
