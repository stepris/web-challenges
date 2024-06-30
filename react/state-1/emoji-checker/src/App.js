import React, { useState } from "react";
import "./styles.css";

export default function App() {
  //  let code = "?";

  const [code, setCode] = useState("");
  const validCode = "🐡🐠🐋";

  function handleClick(event) {
    setCode(code + event.target.textContent);
    console.log(event.target.textContent);
    console.log("Click handled! & Update Code!");
    console.log(code);
  }

  function handleReset() {
    console.log("Reset Code!");
    setCode("");
  }

  return (
    <div className="container">
      <div className="button-container">
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button type="button" onClick={handleClick}>
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button type="button" onClick={handleReset}>
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
      <p>{code}</p>
    </div>
  );
}
