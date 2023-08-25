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
function modulus(a, b){
  return a % b;
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
    case '%':
      return modulus(firstNumber, secondNumber);
  }
}

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const numberDisplay = document.getElementById('number');
const equationDisplay = document.getElementById('equation');
const equalButton = document.getElementById('equal');

numbers.forEach(button => button.addEventListener('click', () => {
  numberDisplay.textContent += button.textContent;
}))

operators.forEach(button => button.addEventListener('click', () => {
  firstNumber = parseInt(numberDisplay.textContent);
  equationDisplay.textContent = numberDisplay.textContent + button.textContent;
  operator = button.textContent;
  numberDisplay.textContent = '';
}))

equalButton.addEventListener('click', () => {
  secondNumber = parseInt(numberDisplay.textContent);
  let result  = operate(firstNumber, secondNumber, operator);
  numberDisplay.textContent = result;
  equationDisplay.textContent = ''; 
})