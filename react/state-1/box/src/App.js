import { useState } from "react";
import "./styles.css";

export default function App() {
  // let isActive = false;
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    // isActive = !isActive;
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive == false ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}
