const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);
  const isTeenMsg = "You are a teen.";
  const notTeenMsg = "You are not a teen.";
  console.log(age);

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
  console.log(age > 19 ? notTeenMsg : isTeenMsg);
  // output.innerHTML =
});

// console.log(output);
