

let btn = document.querySelector(".btn");

// niche ke elements
let names = document.querySelector(".name");
let rollnum = document.querySelector(".rollnum");
let total = document.querySelector(".total")
let percentage = document.querySelector(".percentage");
let grade = document.querySelector(".grade");
let head = document.querySelector(".head");

btn.addEventListener("click", () => {
    head.innerText = "MARKSHEET";

    let sub1 = parseFloat(document.querySelector(".s1").value) || 0;

    let sub2 = parseFloat(document.querySelector(".s2").value) || 0;

    let sub3 = parseFloat(document.querySelector(".s3").value) || 0;

    let sub4 = parseFloat(document.querySelector(".s4").value) || 0;

    let sub5 = parseFloat(document.querySelector(".s5").value) || 0;

    let sum = sub1 + sub2 + sub3 + sub4 + sub5;


    let naming = document.querySelector(".naming").value;
    names.innerText = "YOUR NAME IS : " + naming;

    let roll = document.querySelector(".rollno").value;
    rollnum.innerText = "Your Roll Number is : " + roll;

    total.innerText = "Your Total Marks is : " + sum;
    let p = (sum / 500) * 100;
    percentage.innerText = "Your Percentage is : " + p;

    if (p >= 80) {
        grade.innerText = "Your Grade is : A";
    }
    else if (p >= 60) {
        grade.innerText = "Your Grade is : B";
    }
    else if (p >= 40) {
        grade.innerText = "Your Grade is : C";
    }
    else {
        grade.innerText = "You are Fail";

    }

});

