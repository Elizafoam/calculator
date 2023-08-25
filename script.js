let firstNumber;
let secondNumber;
let operator;

function add(a, b) {
  parseInt(a)
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(firstNumber, secondNumber, operator){
  switch(operator){
    case '+':
      return add(firstNumber, secondNumber);
    case '-':
      return subtract(firstNumber, secondNumber);
    case 'x':
      return multiply(firstNumber, secondNumber);
    case '÷':
      return divide(firstNumber, secondNumber);
  }
}


const buttons = document.querySelectorAll('.button');
const display = document.getElementById('display');
const equalButton = document.getElementById('equal');
const operators = ['÷', 'x', '-', '+', '%'];

buttons.forEach(button => button.addEventListener('click', () => {
  display.textContent += button.textContent;
}))
