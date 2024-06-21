import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>A fantastic new react app</h1>
      <p>This is the first paragraph of text</p>
    </article>
  );
}
