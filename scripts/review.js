const reviewsDisplay = document.querySelector(".reviews");

let numReviews = Number(window.localStorage.getItem("numReviews-ls")) || 0;

if (numReviews !== 0) {
	reviewsDisplay.textContent = numReviews;
} else {
	reviewsDisplay.textContent = `This is our first review. 🥳 Thanks!`;
}

numReviews++;
localStorage.setItem("numReviews-ls", numReviews);

