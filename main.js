const calculatorDOM = document.getElementById("calculator");

calculatorDOM.classList.add("calculator");

const screenDOM = `<div class="screen"></div>`;

calculatorDOM.innerHTML = screenDOM;
console.log(screenDOM);

const btnsArr = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
];

let btnsDOM = "";

for (const item of btnsArr) {
}
