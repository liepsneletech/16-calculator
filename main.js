const calculatorDOM = document.getElementById("calculator");

calculatorDOM.classList.add("calculator");

const screen = `<div class="screen"></div>`;

const btnsArr = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "&times;",
    "0",
    "&#247;",
    "=",
];

let btns = "";

for (const item of btnsArr) {
    btns += `<button class="btn">${item}</button>`;
}

const generatedHTML = `${screen}
<div class="btns">${btns}</div>`;

calculatorDOM.innerHTML = generatedHTML;

const btnsDOM = calculatorDOM.querySelectorAll(".btn");

const screenDOM = calculatorDOM.querySelector(".screen");

let screenContent = "";

for (let i = 0; i < btnsDOM.length; i++) {
    btnsDOM[i].addEventListener("click", function () {
        btnsDOM[i].classList.add("clicked");
        screenDOM.innerHTML += `${btnsDOM[i].innerHTML}`;
    });
}
