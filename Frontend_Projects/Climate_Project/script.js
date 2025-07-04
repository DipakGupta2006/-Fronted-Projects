// Background slider functionality
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function changeBackground() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Change background every 10 seconds
setInterval(changeBackground, 10000);

// Update date
function updateDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    document.getElementById('current-date').textContent = today.toLocaleDateString('en-US', options);
}

updateDate();

// Search functionality
document.getElementById('search-btn').addEventListener('click', () => {
    const location = document.getElementById('location-input').value.trim();
    if (location) {
        // In a real app, you would fetch weather data from an API here
        // For demo purposes, we'll just update the city name
        document.getElementById('city-name').textContent = location;
        
        // Show loading animation
        const icon = document.getElementById('weather-icon');
        icon.classList.remove('fa-sun', 'fa-cloud', 'fa-cloud-rain', 'fa-snowflake');
        icon.classList.add('fa-spinner', 'fa-spin');
        
        // Simulate API call delay
        setTimeout(() => {
            icon.classList.remove('fa-spinner', 'fa-spin');
            
            // Random weather for demo
            const weatherTypes = [
                { icon: 'fa-sun', desc: 'Sunny', temp: Math.floor(Math.random() * 15) + 20 },
                { icon: 'fa-cloud', desc: 'Cloudy', temp: Math.floor(Math.random() * 10) + 15 },
                { icon: 'fa-cloud-rain', desc: 'Rainy', temp: Math.floor(Math.random() * 8) + 12 },
                { icon: 'fa-snowflake', desc: 'Snowy', temp: Math.floor(Math.random() * 5) + 0 }
            ];
            
            const randomWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
            
            icon.classList.add(randomWeather.icon);
            document.getElementById('weather-desc').textContent = randomWeather.desc;
            document.getElementById('current-temp').textContent = randomWeather.temp;
            
            // Update details
            document.getElementById('humidity').textContent = `${Math.floor(Math.random() * 40) + 50}%`;
            document.getElementById('wind-speed').textContent = `${Math.floor(Math.random() * 20) + 5} km/h`;
            document.getElementById('pressure').textContent = `${Math.floor(Math.random() * 20) + 1000} hPa`;
            
            // Update forecast
            const forecastDays = document.querySelectorAll('.forecast-day');
            forecastDays.forEach(day => {
                const temp = Math.floor(Math.random() * 10) + randomWeather.temp - 5;
                day.querySelector('p:last-child').textContent = `${temp}°C`;
                
                // Random icon for forecast
                const forecastIcon = day.querySelector('i');
                forecastIcon.className = 'fas ' + weatherTypes[Math.floor(Math.random() * weatherTypes.length)].icon;
            });
            
        }, 1500);
    } else {
        alert('Please enter a location');
    }
});

// // async function getCatFact() {
// //     const factBox = document.getElementById("fact-box");

// //     try {
// //         const response = await fetch("https://catfact.ninja/fact");
// //         const data = await response.json();
// //         factBox.textContent = data.fact;
// //     } catch (error) {
// //         factBox.textContent = "Failed to fetch a cat fact. Try again!";
// //         console.error(error);
// //     }
// // }

// // https://www.themealdb.com/api/json/v1/1/search.php?s=${query}


// let form = document.getElementById('search-form');
// let input = document.getElementById('search-input');
// let resultDiv = document.getElementById('recipe-result');

// form.addEventListener('submit', e => {
//     e.preventDefault();
//     const query = input.value.trim();
//     if (query === '') return;

//     fetchRecipe(query);
// });

// async function fetchRecipe(query) {
//     resultDiv.innerHTML = `<p>Searching for "${query}"...</p>`;
//     try {
//         const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
//         const data = await res.json();

//         if (data.meals) {
//             displayRecipe(data.meals[0]);
//         } else {
//             resultDiv.innerHTML = `<p>No recipes found for "<strong>${query}</strong>". Try another search.</p>`;
//         }
//     }
//     catch (err) {
//         resultDiv.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
//         console.error(err);
//     }
// }


// function displayRecipe(meal) {
//     const ingredients = [];

//     // Extract ingredients and measurements
//     for (let i = 1; i <= 20; i++) {
//         const ingredient = meal[`strIngredient${i}`];
//         const measure = meal[`strMeasure${i}`];
//         if (ingredient && ingredient.trim() !== "") {
//             ingredients.push(`${measure} ${ingredient}`);
//         }
//     }

//     resultDiv.innerHTML = `
//         <div class="recipe-card">
//             <h2>${meal.strMeal}</h2>
//             <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
//             <p><strong>Category:</strong> ${meal.strCategory}</p>
//             <p><strong>Area:</strong> ${meal.strArea}</p>
//             <h3>Ingredients</h3>
//             <ul>
//                 ${ingredients.map(item => `<li>${item}</li>`).join('')}
//             </ul>
//             <h3>Instructions</h3>
//             <p>${meal.strInstructions}</p>
//         </div>
//     `;
// }
