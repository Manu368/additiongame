let firstnum = document.getElementById("firstNumber");
let secondnum = document.getElementById("secondNumber");
let user = document.getElementById("userInput");
let success = document.getElementById("gameResult");


function checkre() {
    let first = Math.random() * 100;
    let second = Math.random() * 100;
    let final1 = Math.ceil(first);
    let final2 = Math.ceil(second);
    firstnum.textContent = final1;
    secondnum.textContent = final2;

    user.value = "";
    success.textContent = "";

}

checkre();

function check() {
    let manu = parseInt(firstnum.textContent);
    let sachin = parseInt(secondnum.textContent);
    let kohli = parseInt(user.value);


    if (manu + sachin === kohli) {
        success.textContent = "Congratulations! You got it right.";
        success.style.backgroundColor = "#028a0f";

    } else {
        success.textContent = "Please Try Again!";
        success.style.backgroundColor = "#1e217c";
    }

}