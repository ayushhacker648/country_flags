const apiURL = "https://restcountries.com/v3.1/all";

// Fetch country data
fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById("flagsContainer");

        data.forEach(country => {
            const card = document.createElement("div");
            card.className = "country-card";
            card.innerHTML = `
                <img src="${country.flags.png}" alt="${country.name.common}">
                <p>${country.name.common}</p>
            `;

            card.addEventListener("click", () => showDetails(country));
            container.appendChild(card);
        });
    });

function showDetails(country) {
    document.getElementById("details").style.display = "block";
    document.getElementById("countryName").textContent = country.name.common;
    document.getElementById("countryFlag").src = country.flags.png;
    document.getElementById("capital").textContent = country.capital ? country.capital[0] : "N/A";
    document.getElementById("population").textContent = country.population.toLocaleString();
    document.getElementById("region").textContent = country.region;
    
    if (country.currencies) {
        let currencyKey = Object.keys(country.currencies)[0];
        document.getElementById("currency").textContent = country.currencies[currencyKey].name;
    } else {
        document.getElementById("currency").textContent = "N/A";
    }
}