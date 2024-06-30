import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleButtonPress(direction) {
    if (direction === "inc") {
      setCounter(counter + 1);
    }
    if (direction === "dec") {
      setCounter(counter - 1);
    }
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counter} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={() => {
            handleButtonPress("inc");
          }}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={() => {
            handleButtonPress("dec");
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
