// let one = document.querySelector(".one")

// let two = document.querySelector(".two")

// let three = document.querySelector(".three")

// let display = document.querySelector(".display")

// let add = document.querySelector(".add")

// let sub = document.querySelector(".sub")

// let btn = document.querySelector("button")

// one.addEventListener("click", () => {
//     // display.innerText = "1";
//     display.value = "1";
// })
// two.addEventListener("click", () => {
//     // display.innerText = "1";
//     display.value = "2";
// })
// add.addEventListener("click", () => {
//     // display.innerText = "1";
//     display.value = "+";
// })


// let display = document.getElementById("display");

// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", () => {

//         if (display.innerText === "C") {
//             display.innerText = ""; // If "C" is clicked, clear the display
//         } else {
//             display.innerText += button.innerText; // Append button text to display
//         }

//         // display.value += button.innerText; // Appends the button value to the input field
//     });
// });


// let display = document.getElementById("display"); // Selecting the display div

// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", () => {
//         if (button.innerText === "C") {
//             display.value = ""; // If "C" is clicked, clear the display
//         }
//         else if(button.innerText ==="="){
//             try {
//                 display.textContent = eval(display.textContent); // Calculate result
//             } catch {
//                 display.textContent = "Error"; // Handle errors
//             }
//         }
//         else {
//             display.value += button.innerText; // Append button text to display
//         }
//     });
// });


// let display = document.getElementById("display"); // Selecting the display div

// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", () => {
//         if (button.innerText === "C") {
//             display.value = ""; // Clears the display
//         }
//         else if (button.innerText === "=") {
//             try {
//                 display.textContent = eval(display.textContent); // Calculate result
//             } catch {
//                 display.textContent = "Error"; // Handle errors
//             }
//         }
//         else {
//             display.value += button.innerText; // Append button text to display
//         }
//     });
// });

// let display = document.getElementById("display"); // Selecting the display div

// document.querySelectorAll("button").forEach(button => {
//     button.addEventListener("click", () => {
//         let value = button.innerText;

//         if (value === "C") {
//             display.value = ""; // Clears the display
//         }
//         else if (value === "=") {
//             try {
//                 display.value = eval(display.textContent.replace(/×/g, "*").replace(/÷/g, "/")); // Evaluates the expression
//             } catch {
//                 display.value = "Error"; // Handles errors
//             }
//         }
//         else {
//             display.value += value; // Append button text to display
//         }
//     });
// });


let display = document.getElementById("display"); // Selecting the input field

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;

        if (value === "C") {
            display.value = ""; // Clears the display
        }
        else if (value === "=") {
            try {
                display.value = eval(display.value.replace(/×/g, "*").replace(/÷/g, "/")); // Evaluates the expression
            } catch {
                display.value = "Error"; // Handles errors
            }
        }
        else if (value === "⌫" || value === "←") { // Check for Backspace entity
            display.value = display.value.slice(0, -1); // Remove the last character
        }
        
        else {
            display.value += value; // Append button text to display
        }
    });
});

