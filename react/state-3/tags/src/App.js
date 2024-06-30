import { useState } from "react";
import "./styles.css";
import Form from "./components/Form/index.js";
import List from "./components/List/index.js";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleAddTag(newTag) {
    setTags([...tags, newTag]);
    console.log(newTag);
  }

  function handleDeleteTag(tagToDelete) {
    setTags(tags.filter((tag) => tag !== tagToDelete));
    console.log(tagToDelete);
  }

  return (
    <main className="app">
      <Form onAddTag={handleAddTag} />
      <List tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}

/* React State 3: Tags

In the ./src/App.js file, there is a tags state passed to the List component. Each tag has a delete button.

There is also a Form component which already handles the submit event and the data.

Currently, it's not possible to add or remove a tag from state.

Task

1. At first, make sure you understand the data flow; note that
- Form has a onAddTag prop and
- List a onDeleteTag prop which are not yet passed to them in the App component.

2. Write and wire up state updates to add and delete a tag.

You can use the following hints as guideline:


****Add a new Tag******

- In the App component, write a handleAddTag function which receives one parameter, e.g. newTag.
- Call the state setter function and add the new tag to the current state.
- Pass handleAddTag to the Form component using the correct prop name.

🎉 Congratulations, submitting the form now adds a new tag to the list!

********Remove a Tag*******

- In the App component, write a handleDeleteTag function which receives one parameter, e.g. tagToDelete.
- Call the state setter function and remove the tag from the current state.
- Pass handleDeleteTag to the List component using the correct prop name.


Notes

You only have to touch the ./src/App.js file. */
