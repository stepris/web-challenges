console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const complaintSuccessMessage = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

function hideComplaintSuccess() {
  complaintSuccessMessage.setAttribute("hidden", "");
}

function showComplaintSuccess() {
  complaintSuccessMessage.removeAttribute("hidden");
}

hideTosError();
hideComplaintSuccess();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Wenn man die Checkbox direkt aus dem DOM greifen will

  /* 
  if (tosCheckbox.checked === false) {
    showTosError();
    return;
  }
 */

  // Alternativ auch über per Event-Objekt

  /*
  if (event.target.elements.tos.checked === false) {
    // showTosError();
    // return;
  }
 */

  // Dritte Alternative über das FormData-Objekt, das die Formdaten quasi aufbereitet

  // Man kann den value der Checkbox doch in der Form benutzen, dass man überprüft, ob im Event-Objekt die Checkbox mitaufgeführt ist. Der Wert ist zwar immer "on", jedoch wird sie nur mitaufgeführt bei den Properties, wenn sie tatsächlich angeklickt wurde.

  const receivedFormData = new FormData(event.target);
  const receivedFormDataObject = Object.fromEntries(receivedFormData);
  // console.log(receivedFormDataObject.tos === "on");
  if (receivedFormDataObject.tos !== "on") {
    console.log("ToS nicht gechecked!");
    showTosError();
    return;
  }

  hideTosError();
  showComplaintSuccess();

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});

tosCheckbox.addEventListener("input", () => {
  if (tosCheckbox.checked === false) {
    showTosError();
    return;
  }
  hideTosError();
});
