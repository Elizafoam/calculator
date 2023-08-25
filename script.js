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
      if (secondNumber == 0){
        message.textContent = 'You cannot divide by 0';
        return '';
      } else {
        return divide(firstNumber, secondNumber);
      }
    case '%':
      return modulus(firstNumber, secondNumber);
  }
}

function clear(){
  numberDisplay.textContent = '';
  equationDisplay.textContent = '';   
}

function remove(){
  let num = numberDisplay.textContent; 
  let equation = equationDisplay.textContent; 
  num == '' ? equationDisplay.textContent = equation.substring(0, equation.length-1) : numberDisplay.textContent = num.substring(0, num.length-1);
}

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

const numberDisplay = document.getElementById('number');
const equationDisplay = document.getElementById('equation');

const equalButton = document.getElementById('equal');
const clearButton = document.getElementById('clear');
const deleteButton = document.getElementById('delete');

const message = document.getElementById('message');

numbers.forEach(button => button.addEventListener('click', () => {
  numberDisplay.textContent += button.textContent;
}))

operators.forEach(button => button.addEventListener('click', () => {
  firstNumber = numberDisplay.textContent.includes('.') ? parseFloat(numberDisplay.textContent) : parseInt(numberDisplay.textContent);
  equationDisplay.textContent = numberDisplay.textContent + button.textContent;
  operator = button.textContent;
  numberDisplay.textContent = '';
}))

equalButton.addEventListener('click', () => {
  secondNumber = numberDisplay.textContent.includes('.') ? parseFloat(numberDisplay.textContent) : parseInt(numberDisplay.textContent);
  let result  = operate(firstNumber, secondNumber, operator);
  numberDisplay.textContent = result;
  equationDisplay.textContent = ''; 
})

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', remove);