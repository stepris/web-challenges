console.clear();

/*
Convert the input value to uppercase when clicking the button

[ ] – Assign the input element to a variable
[ ] – Assign the button element to a variable
[ ] – Add an event listener to the button, so the input value turns into uppercase when the button is clicked

Hint: Access the value by using `.value` on the input element

*/

let firstInput = document.querySelector('[data-js="first-input"]');
console.log(firstInput);

let buttonUppercase = document.querySelector('[data-js="button-uppercase"]');
console.log(buttonUppercase);

buttonUppercase.addEventListener("click", function () {
  // const welcomeMsg = "Hallo Tom von unserer Variable";

  // let variableA = "Test 1";
  // let variableB = variableA;

  // variableA = "Test 2";
  // console.log(variableB);

  // variableB = "Test neuer Wert";

  // firstInput.value = welcomeMsg;

  firstInput.value = firstInput.value.buttonUppercase();
});
