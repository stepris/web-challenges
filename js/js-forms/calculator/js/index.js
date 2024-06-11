console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
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

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--

  //console.log(event.target.elements.operator.value);

  const numberA = Number(event.target.elements.numberA.value);
  const numberB = Number(event.target.elements.numberB.value);

  switch (event.target.elements.operator.value) {
    case "addition":
      result = add(numberA, numberB);
      break;
    case "subtraction":
      result = subtract(numberA, numberB);
      break;
    case "multiplication":
      result = multiply(numberA, numberB);
      break;
    case "division":
      result = divide(numberA, numberB);
      break;
    default:
      console.log("Default case nur!");
  }

  // --^-- write your code here --^--

  resultOutput.textContent = result;
});

/* 

Build a calculator that can add, subtract, multiply and divide two numbers.

Add the following functionality to the submit event handler:

Use the values of the numberA and numberB inputs to perform the operation selected by the operator input on them. You can use the provided helper functions add(), subtract(), multiply() and divide().
Assign the result to the result variable.
💡 Make sure to thoroughly test the addition operation, as it can have unexpected results.

💡 You only have to touch the js/index.js file.

*/
