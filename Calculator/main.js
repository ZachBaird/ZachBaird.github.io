// Define variables.
const outputBox = document.getElementById('output-text');
const inputContainer = document.querySelector('.input');
let numberFlag = false;
let firstInput = '';
let secondInput = '';
let operation;
let result;
let number = 0;

// Arithmetic & display methods.
let add = (number1, number2) => { return parseFloat(number1) + parseFloat(number2); }
let subtract = (number1, number2) => { return parseFloat(number1) - parseFloat(number2); }
let multiply = (number1, number2) => { return parseFloat(number1) * parseFloat(number2); }
let divide = (number1, number2) => { return parseFloat(number1) / parseFloat(number2); }
let displayResult = (res) => {
  firstInput = '';
  secondInput = '';
  outputBox.innerHTML = res;
  numberFlag = false;

  setTimeout(function () {
    outputBox.innerHTML = '';
  }, 3000);
};
let manageOperation = operate => {
  operation = operate;
  firstInput = outputBox.innerHTML;
  numberFlag = true;
  outputBox.innerHTML += ' ' + operate + ' ';
}

// Event listener logic.
for (let i = 0; i < inputContainer.children.length; i++) {
  inputContainer.children[i].addEventListener('click', function (e) {
    // Grab the data-value attribute from the child element.
    let input = inputContainer.children[i].getAttribute('data-value');

    // Determine what action to take based on the data-value.
    switch (input) {
      case '+':
        manageOperation('+');
        break;
      case '-':
        manageOperation('-');
        break;
      case '*':
        manageOperation('*');
        break;
      case '/':
        manageOperation('/');
        break;
      case 'C':
        outputBox.innerHTML = '';
        firstInput = '';
        secondInput = '';
        numberFlag = false;
        break;
      case '.':
        if (numberFlag) {
          secondInput += input;
        } else {
          firstInput += input;
        }
        outputBox.innerHTML += input;
        break;
      case '=':
        switch (operation) {
          case '+':
            result = add(firstInput, secondInput);
            displayResult(result);
            break;
          case '-':
            result = subtract(firstInput, secondInput);
            displayResult(result);
            break;
          case '*':
            result = multiply(firstInput, secondInput);
            displayResult(result);
            break;
          case '/':
            result = divide(firstInput, secondInput);
            displayResult(result);
            break;
        }
        break;
      default:
        if (numberFlag) {
          secondInput += input;
          outputBox.innerHTML += input;
          console.log(secondInput);
        } else {
          outputBox.innerHTML += input;
        }
        break;

    }
  });
}

