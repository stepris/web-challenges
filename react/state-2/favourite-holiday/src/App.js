import React, { useState, useRef } from "react";
import "./styles.css";

export default function App() {
  const [holiday, setHoliday] = useState();
  const [date, setDate] = useState();
  const holidayInputRef = useRef(null);
  console.log(holidayInputRef);

  function handleSubmit(event) {
    event.preventDefault();
    // console.dir(event.target);
    // console.log(event.target.holiday.value);
    setHoliday(event.target.holiday.value);
    setDate(event.target.date.value);

    event.target.reset();

    event.target.holiday.focus();

    console.log(holidayInputRef);
    // holidayInputRef.current.focus();
  }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
          ref={holidayInputRef}
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button type="submit" className="form__submit-button">
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      {/*    <p>
        Favourite Holiday: <span className="output">New Year</span>
      </p>
      <p>
        Date: <span className="output">Well...</span>
      </p> */}
      <p>
        Favourite Holiday: <span className="output">{holiday}</span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
