import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: Yay!",
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);
  // console.log(entries);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([{ id: uid(), date, ...newEntry }, ...entries]);
    console.log(entries);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

/* React State: Journal App with Form Submit

In this challenge we want to store the entries information in a state to be able to add new entries.

***********************************************

Task

****Store the entries in state*****

- Locate the component with the array containing all journal entries. Here it is the variable entries in the EntriesSection component.
- Rename the variable to initialEntries to reflect this is the initial value for the state.
- Create a new state called entries with initialEntries as initial value.

Nice, the entries are stored in state now! 🚀

----------------------------------------------

***Life the state up****

The component rendering the entries and the component with the form needs to share this state of entries. We need to lift the state up to the first common ancestor of these two components. In the template it is the App component.

- Update the function declaration of the EntriesSection component to accept a new prop called entries.
- Move the initialEntries and the state to their common ancestor, e.g. App.
- Pass the entries state via the entries prop down to the EntriesSection.

Great, the state lives in the right component now! 🚀

***Let the form trigger an exposed event***

We can wire up the form to add entries to the state now. Locate the component with the form. Here it is called EntryForm.

- Update this component's function declaration to accept a new prop, like onAddEntry. The prop should be used for an event that you trigger when a new journal entry should be added.
- Write a function handleSubmit and pass it as the onSubmit attribute of the form JSX tag.
- In handleSubmit gather the values of all input fields. (Hint: you can use new FormData() for this.)
- Don't forget to prevent the default form behavior when submitting.
- In handleSubmit create an object with the keys motto and notes containing the fields' values.
- Call onAddEntry and pass the object.
- Make sure to reset the form after submitting.

Nice job! The component can now inform its parent when an entry should be added! 🚀

*** Updating the state to add new entries***

Let's add new entries to the state now.

Locate the component with the shared state. (The App component in this template.)
Create a function called handleAddEntry.
The function should accept a parameter called newEntry, which should be an object describing the new entry.

Your new journal entry needs a date.

- Create a string containing the date in the desired format with the snippet below.
- Add the key date to the object describing the new entry.
const date = new Date().toLocaleDateString("en-us", { dateStyle: "medium" });
Each entry in the entries array needs an ID – a unique identifier.

- Install the npm package uid via the terminal. You can use the command below.
- Call the function uid() to generate a new ID.
- Add the key id to the object describing the new entry.

  npm install uid

- Call the setEntries function and insert the new entry at the beginning of the array.
- Pass the handleAddEntry function with the prop onAddEntry to the EntryForm component.

Done! You can add new entries to your journal now! 🚀 🚀 🚀 */
