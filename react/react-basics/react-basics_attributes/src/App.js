import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article>
      <h2 className="article__title">My text</h2>
      <label htmlFor="myInput">This is my new input field</label>
      <input type="text" id="myInput" name="myInput"></input>
      <a className="article__link" href="https://google.com">
        This is the link to google
      </a>
    </article>
  );
}
