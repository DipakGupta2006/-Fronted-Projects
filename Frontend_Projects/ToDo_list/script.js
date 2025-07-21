let remove1 = document.querySelector(".rembtn1")
let remove2 = document.querySelector(".rembtn2")
let remove3 = document.querySelector(".rembtn3")
let remove4 = document.querySelector(".rembtn4")
let remove5 = document.querySelector(".rembtn5")
let remove6 = document.querySelector(".rembtn6")
let remove7 = document.querySelector(".rembtn7")

let item1 = document.querySelector(".item1")
let item2 = document.querySelector(".item2")
let item3 = document.querySelector(".item3")
let item4 = document.querySelector(".item4")
let item5 = document.querySelector(".item5")
let item6 = document.querySelector(".item6")
let item7 = document.querySelector(".item7")

remove1.addEventListener("click", () => {
    item1.remove();
})
remove2.addEventListener("click", () => {
    item2.remove();
})
remove3.addEventListener("click", () => {
    item3.remove();
})
remove4.addEventListener("click", () => {
    item4.remove();
})
remove5.addEventListener("click", () => {
    item5.remove();
})


let extrabtn = document.querySelector(".extrabtn")

extrabtn.addEventListener("click", () => {
    let extra = document.querySelector(".extra").value;

    // Create a wrapper div to hold both the paragraph and the button
    let wrapper = document.createElement("div");
    wrapper.style.display = "flex";
    wrapper.style.justifyContent = "space-between";
    wrapper.style.alignItems = "center";
    // wrapper.style.background = "#f0f0f0";
    wrapper.style.padding = "10px";
    wrapper.style.margin = "8px 0";
    // wrapper.style.borderRadius = "5px";

    // Create paragraph
    let newPara = document.createElement("p");
    newPara.textContent = extra;
    newPara.style.margin = "0"; // remove default <p> margin

    // Create remove button
    let newbtn = document.createElement("button");
    newbtn.innerText = "Remove";
    newbtn.classList.add("remove-btn");
    newbtn.style.height = "30px";

    // Add remove functionality
    newbtn.addEventListener("click", () => {
        wrapper.remove();
    });

    // Append paragraph and button to wrapper
    wrapper.appendChild(newPara);
    wrapper.appendChild(newbtn);

    // Append wrapper to output
    let output = document.querySelector(".output");
    output.appendChild(wrapper);

    // Clear input
    document.querySelector(".extra").value = "";
});

