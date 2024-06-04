console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

// bodyElement.classList.toggle("dark");

const buttonDarkMode = document.querySelector('[data-js="dark-mode-button"]');

const buttonLightMode = document.querySelector('[data-js="light-mode-button"]');

const buttonToggleMode = document.querySelector('[data-js="toggle-button"]');

console.log(buttonDarkMode);
console.log(buttonLightMode);
console.log(buttonToggleMode);

buttonDarkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

buttonLightMode.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

buttonToggleMode.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
