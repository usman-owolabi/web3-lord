// Updates the display when buttons are clicked
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.textContent === '0') {
      display.textContent = value; // Replace default zero
    } else {
      display.textContent += value; // Append the clicked value
    }
  }
  
  // Clears the display
  function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '0'; // Reset to default zero
  }
  
  // Evaluates the expression in the display
  function calculate() {
    const display = document.getElementById('display');
    try {
      display.textContent = eval(display.textContent); // Evaluate the expression
    } catch (error) {
      display.textContent = 'Error'; // Show error for invalid expressions
    }
  }
  