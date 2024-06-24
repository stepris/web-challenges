import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Click me!</Button>
      <Button>Click me twice!</Button>
      <Button>All that clicking!</Button>
      <Button>A nice button!</Button>
      <Button>
        The best button!
        <p>Where is this element?</p>
      </Button>
    </main>
  );
}

function Button({ children }) {
  console.log(children);
  return (
    <button className="button" type="button">
      {children}
      {children[1]}
    </button>
  );
}
