import { useState } from "react";
import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { uid } from "uid";

const initialEntries = [
  {
    id: 1000,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
    isFavorite: false,
  },
  {
    id: 999,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
    isFavorite: false,
  },
  {
    id: 998,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    isFavorite: false,
  },
  {
    id: 997,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: Yay!",
    isFavorite: false,
  },
];

function App() {
  const [entries, setEntries] = useState(initialEntries);

  function handleAddEntry(newEntry) {
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    setEntries([
      { date, id: uid(), ...newEntry, isFavorite: false },
      ...entries,
    ]);
  }

  function handleToggleFavorite(id) {
    const bookmarkedItems = entries.map((entry) => {
      return entry.id === id
        ? { ...entry, isFavorite: !entry.isFavorite }
        : entry;
    });

    setEntries(bookmarkedItems);
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection
          entries={entries}
          onToggleFavorite={handleToggleFavorite}
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;

/* React State: Journal App with Favorite Button and Shared State


In this challenge we want to store the favorite feature in the shared state alongside the other entry data.

********************************************************

Task

******Prepare the state for entries*****

First we need to make sure all entries in state contain information about the favorite button. Locate the component holding the shared state for all entries. Here it is the App component.

- Add the key isFavorite with the value false to each entry in the initialEntries array.
- Add the key isFavorite with the value false to a newly created entry in the function handleAddEntry.

This was important to have a consistent shape of all entry objects 🚀


****Handle clicks on the favorite button****

Now let's wire up this information stored in state with the favorite button.

Locate the component with the favorite button. Here it's called FavoriteButton.

- Accept a new prop in this component called onToggleFavorite. This event should be triggered when users press the favorite button.
- Accept a new prop called isFavorite.
- Accept a new prop called id.
- Remove the local state isFavorite from this component.
- Change the button's onClick prop to call onToggleFavorite and pass id with this call as first argument.

Great, the favorite button can now inform via an exposed event, which entry should be marked as favorite (or which favorite to remove) 🚀

****Drill all the props*****

💡 This step is closely tied to the starter template and depends heavily on the design of your app.

Locate the component that renders a single entry including the favorite button. Here it's Entry.

- In this component accept the three props too: onToggleFavorite, isFavorite, id.
- Pass all three props to the FavoriteButton component.

Locate the component that renders the list of all entries. Here it's EntrySection.

- Accept the prop onToggleFavorite.
- Adjust the integration of the Entry component to pass the onToggleFavorite prop.
- In addition pass each entry's id and isFavorite information to the Entry component as prop.

Everything is wired up! 🚀


****Update the state****

Now let's finally adjust the state handling. Go back to the App component.

- Create a new function called handleToggleFavorite which accepts id as parameter.
- Inside this function update the state by calling setEntries. To create a new state value iterate over the entries array and search for the entry matching the id. If the id matches invert the value of isFavorite. (hint: you can use the array method map for this)
- Adjust the integration of the EntrySection component to pass the function handleToggleFavorite to the onToggleFavorite prop.

You have successfully refactored your app to have a more concise state handling! 🚀 🚀 🚀 */
