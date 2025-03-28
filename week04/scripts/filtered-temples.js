const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, August, 25",
        area: 26725,
        imageUrl: "temple_images/manila.jpg"
    },
    {
        templeName: "Alabang Philippines",
        location: "Alabang, Philippines",
        dedicated: "2024, October, 20",
        area: 27542,
        imageUrl: "temple_images/alabang.jpg"
    },
    {
        templeName: "Tacloban Philippines",
        location: "Tacloban, Philippines",
        dedicated: "2024, April, 21",
        area: 45435,
        imageUrl: "temple_images/tacloban.jpg"
    }
];

const templeGrid = document.querySelector('main');
const navLinks = document.querySelectorAll('#primaryNav a');

function displayTemples(templeList) {
    templeGrid.innerHTML = '';
    templeList.forEach(temple => {
        const figure = document.createElement('figure');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const location = document.createElement('p');
        const dedicated = document.createElement('p');
        const area = document.createElement('p');

        img.src = temple.imageUrl;
        img.alt = temple.templeName;
        img.loading = 'lazy';
        img.onerror = () => {
            img.src = 'placeholder.jpg';
        };

        h3.textContent = temple.templeName;
        location.textContent = `Location: ${temple.location}`;
        dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

        figure.appendChild(img);
        figure.appendChild(h3);
        figure.appendChild(location);
        figure.appendChild(dedicated);
        figure.appendChild(area);

        templeGrid.appendChild(figure);
    });
}

function filterTemples(category) {
    let filteredTemples = [];
    switch (category) {
        case 'Old':
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
            break;
        case 'New':
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
            break;
        case 'Large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'Small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }
    displayTemples(filteredTemples);
}

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        filterTemples(event.target.textContent);
    });
});

displayTemples(temples);

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector('#menuButton');
const primaryNav = document.querySelector('#primaryNav');

if (menuButton && primaryNav) {
    menuButton.addEventListener('click', () => {
        primaryNav.classList.toggle('open');
        menuButton.classList.toggle('open');
    });
} else {
    console.error("menuButton or primaryNav not found");
}