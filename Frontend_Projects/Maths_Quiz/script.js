// generating a two random number
let num1 = Math.floor(Math.random() * 1000) + 1;
console.log(num1);

let num2 = Math.floor(Math.random() * 1000) + 1;
console.log(num2);



// generating a random operator
let operators = ['+', '-', '*', '/'];
console.log(operators);

let randomIndex = Math.floor(Math.random() * operators.length);
let randomOperator = operators[randomIndex];

console.log(randomOperator);



// taking user number and sign

let one = document.querySelector(".one")
let sign = document.querySelector(".sign")
let two = document.querySelector(".two")

let btn = document.querySelector(".btn")


let ans = 0;
// writting my answer given by user


one.innerText = num1;
sign.innerText = randomOperator;
two.innerText = num2;


let result;
switch (randomOperator) {
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '*':
        result = num1 * num2;
        break;
    case '/':
        result = num1 / num2;
        break;
    default:
        result = "Invalid operator";
}

console.log(result)


let show = document.querySelector(".show")

btn.addEventListener("click", () => {
    let userans = parseFloat(document.querySelector(".userans").value) || 0;
    ans = Number(userans); // Convert to number

    document.querySelector(".output").innerText = "You entered: " + ans;

    if (result == ans) {
        show.innerText = "Your answer is correct";
    }
    else {
        show.innerText = "Your answer is incorrect, the correct answer is " + result;
    
    }
    // 1. Button element create karo
    const newBtn = document.createElement("button");
    
    // 2. Button ka text set karo
    newBtn.textContent = "Click Me!";
    
    // 3. Button ko style karo (optional)
    newBtn.style.padding = "10px 20px";
    newBtn.style.fontSize = "16px";
    newBtn.style.cursor = "pointer";
})

