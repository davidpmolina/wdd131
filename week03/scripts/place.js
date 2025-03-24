document.addEventListener("DOMContentLoaded", function() {
    // Footer Date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;

    // Static Weather Data (for now)
    let temp = 25; // Temperature in Celsius
    let windSpeed = 10; // Wind Speed in km/h

    // Display Weather Data in HTML
    document.getElementById('temp').textContent = temp;
    document.getElementById('wind').textContent = windSpeed;

    // Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return 13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16);
        } else {
            return "N/A";
        }
    }

    // Display Wind Chill
    let windChill = calculateWindChill(temp, windSpeed);
    document.getElementById('windchill').textContent = windChill === "N/A" ? "N/A" : windChill.toFixed(2);
});