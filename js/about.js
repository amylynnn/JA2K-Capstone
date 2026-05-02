
// Fade-in animation on scroll
const card = document.querySelector('.about-card');

window.addEventListener('scroll', () => {
  const position = card.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }
});

// Initial style
card.style.opacity = "0";
card.style.transform = "translateY(50px)";
card.style.transition = "all 0.8s ease";