const temperature = 5;
const windSpeed = 10;

function calculateWindChill(tempC, windKmh) {
    return (
        13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
}

function displayWindChill() {
    const windChillElement = document.querySelector(".weather ul li:last-child");

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `Wind Chill: ${windChill} °C`;
    } else {
        windChillElement.textContent = `Wind Chill: N/A`;
    }
}

function fillWeatherData() {
    const weatherList = document.querySelectorAll(".weather ul li");
    weatherList[0].textContent = `Temperature: ${temperature} °C`;
    weatherList[1].textContent = `Conditions: Sunny`;
    weatherList[2].textContent = `Wind: ${windSpeed} km/h`;
}

document.addEventListener("DOMContentLoaded", () => {
    fillWeatherData();
    displayWindChill();
});
