console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  //   console.log(event.target.elements);
  const formElements = new FormData(event.target);
  const data = Object.fromEntries(formElements);

  console.log(data);
  console.log(data.age);
  console.log(data.badness);

  // const ageBadnessSum = parseInt(data.age) + parseInt(data.badness);
  const ageBadnessSum = Number(data.age) + Number(data.badness);

  console.log(`The age-badness-sum of ${data.firstName} is ${ageBadnessSum}.`);

  event.target.reset();
  event.target.elements.firstName.focus();
});

// The formula is: age + badness
// Log to the console (replace the values between the quotes):
// The age-badness-sum of "firstName" is "age-badness-sum"
