import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";
import { uid } from "uid";

const initialAnimals = [
  {
    id: "mTBErig",
    name: "Octopus",
    emoji: "🐙",
  },
  {
    id: "iMsbXQ1",
    name: "Crocodile",
    emoji: "🐊",
  },
  {
    id: "Qjf_K7V",
    name: "Beaver",
    emoji: "🦫",
  },
];

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  /*   TODO: 
  Replace the console.log with the state setter function; pass it a copy of the previous state and add the submitted animal at the end of this new state. */

  /* function handleAddAnimal(newAnimal) {
    console.log(newAnimal);
  } */

  function handleAddAnimal(newAnimal) {
    // console.log(newAnimal);
    setAnimals([...animals, { id: uid(), ...newAnimal }]);
    console.log(newAnimal);
  }

  return (
    <main className="app">
      <Form onAddAnimal={handleAddAnimal} />
      <List animals={animals} />
    </main>
  );
}
