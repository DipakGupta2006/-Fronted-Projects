async function getCatFact() {
    const factBox = document.getElementById("fact-box");

    try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        factBox.textContent = data.fact;
    } catch (error) {
        factBox.textContent = "Failed to fetch a cat fact. Try again!";
        console.error(error);
    }
}
