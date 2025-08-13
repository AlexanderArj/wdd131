const reviewsDisplay = document.querySelector(".reviews");
if (reviewsDisplay) {
  const params = new URLSearchParams(window.location.search);
  const countryKey = params.get("country") || "global";

  const storageKey = `numReviews-${countryKey}`;
  let numReviews = Number(localStorage.getItem(storageKey)) || 0;

  if (numReviews !== 0) {
    reviewsDisplay.textContent = numReviews;
  } else {
    reviewsDisplay.textContent = `This is the first review for ${countryKey}. 🥳 Thanks!`;
    numReviews++;
  }

  numReviews++;
  localStorage.setItem(storageKey, numReviews);
}
