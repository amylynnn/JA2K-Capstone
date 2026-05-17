const form = document.getElementById("reviewForm");
const reviewList = document.getElementById("reviewList");
const emptyMessage = document.getElementById("emptyMessage");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const rating = document.getElementById("rating").value;
  const text = document.getElementById("reviewText").value;
  const imageInput = document.getElementById("reviewImage");

  // Hide empty state
  emptyMessage.style.display = "none";

  // Create card
  const card = document.createElement("div");
  card.classList.add("review-card");

  // Current date
  const today = new Date();

  const formattedDate =
    today.toLocaleString("default", { month: "long" }) +
    " " +
    today.getDate() +
    ", " +
    today.getFullYear();

  // Image upload
  let imageHTML = "";

  if (imageInput.files.length > 0) {

    const imageURL = URL.createObjectURL(imageInput.files[0]);

    imageHTML = `
      <img src="${imageURL}" class="review-image" alt="Project review image">
    `;
  }

  // Card content
  card.innerHTML = `

    <div class="review-top">

      <div>
        <h4>${name}</h4>
        <small>${formattedDate}</small>
      </div>

      <span>${rating}</span>

    </div>

    <p>${text}</p>

    ${imageHTML}

  `;

  // Add to top
  reviewList.prepend(card);

  // Smooth animation
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";

  setTimeout(() => {
    card.style.transition = "0.5s ease";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, 100);

  // Reset form
  form.reset();

});
