
const form = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");
const emptyMessage = document.getElementById("emptyMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const rating = document.getElementById("rating").value;
  const text = document.getElementById("reviewText").value;

  // Hide empty message when first review added
  emptyMessage.style.display = "none";

  // Create review card
  const card = document.createElement("div");
  card.classList.add("review-card");

  card.innerHTML = `
    <h4>${name} ${rating}</h4>
    <p>${text}</p>
  `;

  reviewList.prepend(card); // add at top

  form.reset();
});