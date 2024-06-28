import React from "react";
import PokemonList from "./components/PokemonList";
import "./styles.css";

export default function App() {
  return <PokemonList />;
}

/* React Effects and Fetch: Pokémon API


This app should load and display a list of Pokémon.

Task

Open the file ./src/components/PokemonList.js.

For now the Pokémon are only fetched when we click the button below. Let's change the code so that our app does this automatically when the app renders.

Remove the 'Load Pokémon' button.

Change the code below so that the loadPokemon function is only executed when the app component is rendered initially`
Hint: Don't forget the dependency array!

Notes
You only have to touch the ./src/components/PokemonList.js file. */
