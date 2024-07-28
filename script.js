const display = document.querySelector("#display");
const numBtns = document.querySelector("#numbers");
const operatorBtns = document.querySelector("#operations");
const equalBtn = document.querySelector("#equal");
const clearBtn = document.querySelector("#all-clear");
const test = document.querySelector("#test");
let firstNum = null;
let secondNum = null;
let result = null;
let operator = "";
let isEqual = false;

numBtns.addEventListener("click", (e) => {
  if (display.innerText == 0 || isEqual) {
    display.innerText = "";
    isEqual = false;
  }
  display.innerText += e.target.textContent;
  test.innerText = `${firstNum} ${operator} ${secondNum} = ${result}
  ${isEqual}`;
});

operatorBtns.addEventListener("click", (e) => {
  if (operator === "") {
    operator = e.target.textContent;
    firstNum = Number(display.textContent);
    secondNum = null;
    result = null;
    display.innerText = 0;
    test.innerText = `${firstNum} ${operator} ${secondNum} = ${result}
    ${isEqual}`;
  } else {
    secondNum = Number(display.innerText);
    result = operate(firstNum, secondNum, operator);
    display.innerText = roundResult(result);
    firstNum = result;
    secondNum = null;
    result = null;
    operator = e.target.textContent;
    isEqual = true;
    test.innerText = `${firstNum} ${operator} ${secondNum} = ${result}
    ${isEqual}`;
  }
});

equalBtn.addEventListener("click", () => {
  secondNum = Number(display.innerText);
  result = operate(firstNum, secondNum, operator);
  display.innerText = roundResult(result);
  isEqual = true;
  operator = "";
  test.innerText = `${firstNum} ${operator} ${secondNum} = ${result}
  ${isEqual}`;
});

clearBtn.addEventListener("click", () => {
  firstNum = null;
  secondNum = null;
  result = null;
  operator = "";
  display.innerText = 0;
  test.innerText = `${firstNum} ${operator} ${secondNum} = ${result}
  ${isEqual}`;
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

function roundResult(number) {
  if (number.toString().includes(".") && number.toString().length > 15) {
    return number.toFixed(14);
  }
  return number;
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
