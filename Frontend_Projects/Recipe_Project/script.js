// async function getCatFact() {
//     const factBox = document.getElementById("fact-box");

//     try {
//         const response = await fetch("https://catfact.ninja/fact");
//         const data = await response.json();
//         factBox.textContent = data.fact;
//     } catch (error) {
//         factBox.textContent = "Failed to fetch a cat fact. Try again!";
//         console.error(error);
//     }
// }

// https://www.themealdb.com/api/json/v1/1/search.php?s=${query}


let form = document.getElementById('search-form');
let input = document.getElementById('search-input');
let resultDiv = document.getElementById('recipe-result');

form.addEventListener('submit', e => {
    e.preventDefault();
    const query = input.value.trim();
    if (query === '') return;

    fetchRecipe(query);
});

async function fetchRecipe(query) {
    resultDiv.innerHTML = `<p>Searching for "${query}"...</p>`;
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`);
        const data = await res.json();

        if (data.meals) {
            displayRecipe(data.meals[0]);
        } else {
            resultDiv.innerHTML = `<p>No recipes found for "<strong>${query}</strong>". Try another search.</p>`;
        }
    }
    catch (err) {
        resultDiv.innerHTML = `<p>Error fetching data. Please try again later.</p>`;
        console.error(err);
    }
}


function displayRecipe(meal) {
    const ingredients = [];

    // Extract ingredients and measurements
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];
        if (ingredient && ingredient.trim() !== "") {
            ingredients.push(`${measure} ${ingredient}`);
        }
    }

    resultDiv.innerHTML = `
        <div class="recipe-card">
            <h2>${meal.strMeal}</h2>
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
            <p><strong>Category:</strong> ${meal.strCategory}</p>
            <p><strong>Area:</strong> ${meal.strArea}</p>
            <h3>Ingredients</h3>
            <ul>
                ${ingredients.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <h3>Instructions</h3>
            <p>${meal.strInstructions}</p>
        </div>
    `;
}
