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
