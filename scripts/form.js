const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProductOptions() {
    const select = document.getElementById("product");
    if (!select) return;

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
}

function updateReviewCounter() {
    if (window.location.pathname.endsWith("review.html")) {
        let count = localStorage.getItem("reviewCount");

        if (count) {
            count = parseInt(count) + 1;
        } else {
            count = 1;
        }

        localStorage.setItem("reviewCount", count);
    }
}

function validateStarRating() {
  const form = document.getElementById("review-form");
  const ratingMsg = document.getElementById("rating-message");

  if (!form || !ratingMsg) return;

  form.addEventListener("submit", function (event) {
    const selected = form.querySelector('input[name="rating"]:checked');

    if (!selected) {
      event.preventDefault();
      ratingMsg.textContent = "Please select at least one star rating.";
    } else {
      ratingMsg.textContent = "";
    }
  });

  const stars = form.querySelectorAll('input[name="rating"]');
  stars.forEach(star => {
    star.addEventListener("change", () => {
      ratingMsg.textContent = "";
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
    populateProductOptions();
    updateReviewCounter();
    validateStarRating();
});

