document.addEventListener("DOMContentLoaded", function() {
    // Footer Date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    // Static Weather Data (for now)
    const temp = 25; // Temperature in Celsius
    const windSpeed = 10; // Wind Speed in km/h

    // Display Weather Data in HTML
    document.getElementById('temp').textContent = temp + " °C";
    document.getElementById('wind').textContent = windSpeed + " km/h";

    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        if (typeof temp !== 'number' || typeof windSpeed !== 'number' || windSpeed < 0) {
            return "Invalid Input";
        }

        if (temp <= 10 && windSpeed > 4.8) {
            return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        } else {
            return "N/A";
        }
    }

    // Display Wind Chill
    let windChill = calculateWindChill(temp, windSpeed);
    document.getElementById('windchill').textContent = windChill === "N/A" || windChill === "Invalid Input" ? windChill : windChill.toFixed(2) + " °C";
});