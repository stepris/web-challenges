import App from "./components/App/App.js";
// import { cards } from "./Global.js";

// The render function renders the app to the DOM
function render() {
  const root = document.querySelector("#root");
  root.append(App());
  console.log(App());
}

render();
