let currentOperand = '';
let previousOperand = '';
let operation = undefined;

// Updates the display
function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = currentOperand || '0';
}

// Appends a number to the current operand
function appendNumber(number) {
  if (number === '.' && currentOperand.includes('.')) return;
  currentOperand += number;
  updateDisplay();
}

// Chooses an operation (+, -, *, /)
function chooseOperation(op) {
  if (currentOperand === '') return;
  if (previousOperand !== '') {
    compute();
  }
  operation = op;
  previousOperand = currentOperand;
  currentOperand = '';
}

// Computes the result
function compute() {
  let computation;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      return;
  }

  currentOperand = computation.toString();
  operation = undefined;
  previousOperand = '';
  updateDisplay();
}

// Clears the display and resets all variables
function clearDisplay() {
  currentOperand = '';
  previousOperand = '';
  operation = undefined;
  updateDisplay();
}

// Initialize the display
updateDisplay();
