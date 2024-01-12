// script.js

let currentInput = '0';
let operator = null;
let waitingForSecondOperand = false;

function updateDisplay() {
  document.getElementById('display').innerText = currentInput;
}

function appendNumber(number) {
  if (waitingForSecondOperand) {
    currentInput = number;
    waitingForSecondOperand = false;
  } else {
    currentInput = (currentInput === '0') ? number : currentInput + number;
  }
  updateDisplay();
}

function setOperator(op) {
  if (operator !== null && !waitingForSecondOperand) {
    calculate();
  }
  operator = op;
  waitingForSecondOperand = true;
}

function calculate() {
  const display = parseFloat(currentInput);
  const prevInput = parseFloat(document.getElementById('display').innerText);
  if (isNaN(display) || isNaN(prevInput)) {
    clearDisplay();
    return;
  }

  switch (operator) {
    case '+':
      currentInput = prevInput + display;
      break;
    case '-':
      currentInput = prevInput - display;
      break;
    case '*':
      currentInput = prevInput * display;
      break;
    case '/':
      if (display === 0) {
        alert("Cannot divide by zero");
        clearDisplay();
        return;
      }
      currentInput = prevInput / display;
      break;
  }

  operator = null;
  waitingForSecondOperand = false;
  updateDisplay();
}

function clearDisplay() {
  currentInput = '0';
  operator = null;
  waitingForSecondOperand = false;
  updateDisplay();
}
