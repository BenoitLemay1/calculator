const display = document.querySelector("#display");
const numBtns = document.querySelector("#numbers");
const operatorBtns = document.querySelector("#operations");
const equalBtn = document.querySelector("#equal");
const clearBtn = document.querySelector("#all-clear");
let firstNum = null;
let secondNum = null;
let operator = "";

numBtns.addEventListener("click", (e) => {
  if (display.innerText == 0) {
    display.innerText = "";
  }
  display.innerText += e.target.textContent;
});

operatorBtns.addEventListener("click", (e) => {
  operator = e.target.textContent;
  firstNum = Number(display.textContent);
  display.innerText = 0;
});

equalBtn.addEventListener("click", () => {
  secondNum = Number(display.innerText);
  display.innerText = operate(firstNum, secondNum, operator);
  firstNum = Number(display.innerText);
});

clearBtn.addEventListener("click", () => {
  firstNum = null;
  secondNum = null;
  operator = "";
  display.innerText = 0;
});

function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(num1, num2, operator) {
  if (operator === "+") {
    return add(num1, num2);
  }
  if (operator === "-") {
    return substract(num1, num2);
  }
  if (operator === "x") {
    return multiply(num1, num2);
  }
  if (operator === "÷") {
    return divide(num1, num2);
  }
}
