const currentYear = new Date().getFullYear();
const currentYearElement = document.getElementById("currentyear");

if (currentYearElement) {
    currentYearElement.textContent = currentYear;
}

const lastModifiedDate = document.lastModified;
const lastModifiedElement = document.getElementById("last-modified");

if (lastModifiedElement) {
    lastModifiedElement.textContent = ` ${lastModifiedDate}`;
}
