import { D6Button } from "./components/D6Button";
import History from "./components/History";
import "./styles.css";
import { getD6Roll } from "./utils";
// import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function App() {
  const [rolls, setRolls] = useLocalStorageState("rolls", {
    defaultValue: [],
  });

  const handleRoll = () => {
    setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  };

  // console.log("Zweites Würfeln: ", rolls.rollsRoll);
  // console.dir("History Element", History);

  // console.log();
  const currentRollValue = rolls[0]?.value;

  return (
    <div className="app">
      <main className="app__main">
        <D6Button onRoll={handleRoll} currentRollValue={currentRollValue} />
      </main>
      <aside className="app__aside">
        <History rolls={rolls} />
      </aside>
    </div>
  );
}

/* React with Local Storage: Dice 🎲

This dice rolling app rolls a die (d6 = six sided die). Now you want to show recent dice rolls in a list and store them in local storage.

*********************************************************

Task

****Lifting State Up****

Look at the ./src/App.js and ./src/components/D6Button/index.js files.

Lift up the rolls state into the App component.

***Change the D6Button component***

The D6Button component should have the following props:

- value which represents the current roll value (because the button only needs to know the most recent value)
- onRoll which is a function that get called on roll (when the button is clicked)

💡 When designing the interface of your component (which props it has), think about what the component needs to know to function properly. In this case the component only needs to know the current value it should show, and a function that gets called when the button is clicked. Hence you should not pass the whole rolls array to the component.

***Change the App component***

The App component should now hold the state, define the handleRoll function and derive the currentRollValue from the rolls state.

- handleRoll should be passed to onRoll of the <D6Button />
- currentRollValue should be passed to value of the <D6Button />
Make sure everything still works as expected.

Now pass the rolls down to the History component as well (replace rolls={[]}).

✨ You should now see the list of recent rolls in the History component.

****Local Storage****

Install use-local-storage-state via npm. Import the useLocalStorageState hook and use it to store the rolls in local storage.


✨ You now have a persistent dice rolling app!


Notes
You only have to touch the ./src/App.js and ./src/components/D6Button/index.js files. */
