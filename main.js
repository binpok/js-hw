document.addEventListener('DOMContentLoaded', function () {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('#calculator button');
  let currentInput = '';
  let operator = '';
  let firstOperand = '';

  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const buttonText = this.textContent;

      if (buttonText >= '0' && buttonText <= '9' || buttonText === '.') {
        currentInput += buttonText;
      } else if (button.classList.contains('operator')) {
        if (currentInput !== '') {
          firstOperand = currentInput;
          operator = button.getAttribute('data-operator');
          currentInput = '';
        }
      } else if (button.classList.contains('equal')) {
        if (currentInput !== '' && firstOperand !== '') {
          currentInput = calculate(firstOperand, operator, currentInput);
          firstOperand = '';
          operator = '';
        }
      } else if (button.classList.contains('erase')) {
        eraseLast();
      }

      display.value = currentInput;
    });
  });

  function calculate(num1, operator, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          alert('Cannot divide by zero!');
          clearCalculator();
        }
        break;
      default:
        return num2;
    }
  }

  function eraseLast() {
    // Clear the entire input
    currentInput = '';
    display.value = currentInput;
  }

  function clearCalculator() {
    currentInput = '';
    operator = '';
    firstOperand = '';
    display.value = '';
  }
});