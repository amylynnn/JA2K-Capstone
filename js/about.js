

// ABOUT CARD ANIMATION
const aboutCard = document.querySelector('.about-card');

window.addEventListener('scroll', () => {
  const position = aboutCard.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {
    aboutCard.style.opacity = "1";
    aboutCard.style.transform = "translateY(0)";
  }
});

// INITIAL STATE
aboutCard.style.opacity = "0";
aboutCard.style.transform = "translateY(50px)";
aboutCard.style.transition = "all 0.8s ease";

// DESIGN CARDS HOVER EFFECT
const designCards = document.querySelectorAll('.design-card');

designCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px)';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0)';
  });
});