import React, { useState } from "react";

import Counter from "./components/Counter";
import "./styles.css";

export default function App() {
  const [people, setPeople] = useState(2);

  function handleAddingPerson() {
    setPeople(people + 1);
  }

  function handleSubtractingPerson() {
    people <= 1 ? null : setPeople(people - 1);
    // setPeople(people - 1);
  }
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter
        onAddingPerson={handleAddingPerson}
        onSubstractingPerson={handleSubtractingPerson}
      />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
