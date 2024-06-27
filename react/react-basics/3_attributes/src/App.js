import React from "react";
import "./styles.css";

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">
        This is the heading for my article component
      </h2>
      <label htmlFor="myInput">This is my new input field</label>
      <input type="text" id="myInput" name="myInput" />
      <a className="article__link" href="https://google.com">
        This is the link to google
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}

/* Write an Article component and use it to replace the given <div>.

Your component should contain the following parts:

- an <article> as a wrapper HTML element with the class article
- an <h2> with the class article__title and a text of your choice
- a <label> and <input> tag connected with id and htmlFor (!) attributes
- an <a> tag with the class article__link as well as text content and href attribute of your choice (What about a Wikipedia article?)

Notes:

- You rendered Article component does not have any styling? Remember that you need to use className instead of class in JSX.
- You only have to touch the App.js file. */
