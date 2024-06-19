console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
// const message = document.getElementsByClassName("error");
const message = document.querySelector(".error");

//console.log(message[0]);

// console.dir(message);
// console.log(message);
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      throw new Error("Mach keinen Quatsch ey");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;

  try {
    const result = operations[operation](firstNumber, secondNumber);
    output.innerText = result;
  } catch (e) {
    // if operations
    //message.textContent = e;
    message.innerHTML = e;
    console.log(e);
  }
});
