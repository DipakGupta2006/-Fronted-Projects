// let calc = document.querySelector(".calc");
// let come = document.querySelector(".come");

// calc.addEventListener("click", () => {
//     let bills = document.querySelector(".bill");
//     let tips = document.querySelector(".tip");

//     let ans = bills + tips;
//     come.innerText = `Total Amount: ${ans.toFixed(2)}`;
// });






let calc = document.querySelector(".calc");
let come = document.querySelector(".come");

calc.addEventListener("click", () => {
    let bills = parseFloat(document.querySelector(".bill").value); // Get value and convert to number
    let tips = parseFloat(document.querySelector(".tip").value);   // Get value and convert to number

    // Validate input values
    if (isNaN(bills) || isNaN(tips)) {
        come.innerText = "Please enter valid numbers for both fields!";
        return;
    }

    // Calculate total amount including tip
    let ans = bills + (bills * (tips / 100));
    come.innerText = `Total Amount:₹ ${ans.toFixed(2)}`; // Show result with 2 decimal places
});
