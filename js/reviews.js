

const form = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");
const emptyMessage = document.getElementById("emptyMessage");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const rating = document.getElementById("rating").value;
  const text = document.getElementById("reviewText").value;
  const imageInput = document.getElementById("reviewImage");

  // Hide empty message
  emptyMessage.style.display = "none";

  // Create review card
  const card = document.createElement("div");
  card.classList.add("review-card");

  let imageHTML = "";

  // If image uploaded
  if (imageInput.files.length > 0) {

    const imageURL = URL.createObjectURL(imageInput.files[0]);

    imageHTML = `
      <img src="${imageURL}" class="review-image">
    `;
  }

  card.innerHTML = `
    <h4>${name} ${rating}</h4>
    <p>${text}</p>
    ${imageHTML}
  `;

  reviewList.prepend(card);

  // Reset form
  form.reset();
});