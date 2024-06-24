import React, { Fragment } from "react";
import "./styles.css";
import Box from "./components/Box";

export default function App() {
  return (
    <main className="flex-container">
      {/*      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" /> */}
      <Boxes />
    </main>
  );
}

function Boxes() {
  return (
    /*     <div>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </div> */
    <Fragment>
      <Box color="#007bff" />
      <Box color="#fc3" />
      <Box color="#ff3333" />
    </Fragment>
  );
}
