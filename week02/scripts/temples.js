// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date of the document
const lastModified = document.lastModified;

// Output the current year to the copyright span
document.getElementById("currentyear").textContent = currentYear;

// Output the last modified date to the lastModified paragraph
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


const menuButton = document.querySelector('#menuButton');
const primaryNav = document.querySelector('#primaryNav');

menuButton.addEventListener('click', () => {
    primaryNav.classList.toggle('open');
    menuButton.classList.toggle('open');
});