console.log("Home page loaded");

// NAVBAR SHADOW ON SCROLL
const header = document.querySelector(".site-header");

if (header) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// REVEAL ON SCROLL
const revealElements = document.querySelectorAll(".reveal");

if (revealElements.length > 0) {
  const revealOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((element) => {
    revealOnScroll.observe(element);
  });
}


const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target);
  let current = 0;
  const increment = Math.max(1, Math.ceil(target / 60));

  const updateCounter = () => {
    current += increment;

    if (current >= target) {
      counter.textContent = target;
    } else {
      counter.textContent = current;
      requestAnimationFrame(updateCounter);
    }
  };

  updateCounter();
};

if (counters.length > 0) {
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

// Wrap every letter
const textWrapper = document.querySelector('.ml3');

if (textWrapper) {
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime.timeline()
    .add({
      targets: '.ml3 .letter',
      opacity: [0, 1],
      translateY: [40, 0], // smooth upward motion
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 40 * i
    });
}

const slider = document.getElementById("servicesSlider");

function updateActiveSlide() {
  if (!slider) return;

  const slides = slider.querySelectorAll(".service-slide");
  const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;

  slides.forEach((slide) => {
    const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
    const distance = Math.abs(sliderCenter - slideCenter);

    if (distance < slide.offsetWidth / 2) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

if (slider) {
  slider.addEventListener("scroll", updateActiveSlide);
  window.addEventListener("load", updateActiveSlide);
  window.addEventListener("resize", updateActiveSlide);
}

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");

    const symbol = item.querySelector("span");
    symbol.textContent = item.classList.contains("active") ? "-" : "+";
  });
});

const panelCards = document.querySelectorAll(".panel-card");

panelCards.forEach(card => {
  card.addEventListener("click", () => {

    // remove active from all
    panelCards.forEach(c => c.classList.remove("active"));

    // add active to clicked
    card.classList.add("active");

  });
});
