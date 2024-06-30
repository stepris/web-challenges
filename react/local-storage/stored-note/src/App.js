// import { useState } from "react";
import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  // Not really the desired behavior with just one argument
  // const [note, setNote] = useLocalStorageState("note");
  // const [font, setFont] = useLocalStorageState("system-ui");

  const [note, setNote] = useLocalStorageState("note", { defaultValue: "" });
  const [font, setFont] = useLocalStorageState("font", {
    defaultValue: "system-ui",
  });

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  console.log("Note: ", note);
  console.log("Font: ", font);

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}

/* React with Local Storage: Stored Note

The contents of this notepad are lost when you refresh the page. Make it persistent by saving the contents to local storage.

Task

Switch to the ./src/App.js file and replace both useState hooks with useLocalStorageState hooks to make the notepad and the font selection persistent. The use-local-storage-state package is already installed. Import it like this:

import useLocalStorageState from "use-local-storage-state";


Notes
You only have to touch the ./src/App.js file. */
