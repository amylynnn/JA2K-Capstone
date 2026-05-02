document.addEventListener("DOMContentLoaded", () => {

  /* ===== OUR FOCUS EFFECT ===== */
  const focusSection = document.getElementById("focus-section");

  if (focusSection) {
    focusSection.addEventListener("mousemove", (e) => {
      const items = focusSection.querySelectorAll("h2, p");

      const rect = focusSection.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const sectionWidth = rect.width;

      const ratio = (mouseX / sectionWidth - 0.5) * 2;

      items.forEach((item, index) => {
        const amount = index === 0 ? 20 : 35;
        item.style.transform = `translateX(${ratio * amount}px)`;
      });
    });

    focusSection.addEventListener("mouseleave", () => {
      const items = focusSection.querySelectorAll("h2, p");

      items.forEach((item) => {
        item.style.transform = "translateX(0)";
      });
    });
  }

  /* ===== MAGIC BENTO SPOTLIGHT ===== */
  const cards = document.querySelectorAll(".service-card");

  cards.forEach((card) => {

    // default position (center)
    card.style.setProperty("--x", "50%");
    card.style.setProperty("--y", "50%");

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });

    // reset when leaving
    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--x", "50%");
      card.style.setProperty("--y", "50%");
    });

  });

});