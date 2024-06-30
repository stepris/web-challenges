import { useEffect, useState } from "react";

// Version 1
export default function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}`
        );
        console.table(response);
        const data = await response.json();
        setPokemon(data.results);
        // console.table(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [offset]);

  console.log(offset);

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          {
            // offset <= 0 ? null : setOffset(offset - 20);

            const nextOffset = offset - 20;

            // if (nextOffset <= 0) return setOffset(0);

            // setOffset(nextOffset);

            if (nextOffset > 0) {
              setOffset(nextOffset);
            } else if (nextOffset <= 0 && offset !== 0) {
              setOffset(0);
            }
          }
        }}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          setOffset(offset + 20);
        }}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}

// Version 2 - works with properties of response object
// Version currently active
export function PokemonListVersion2() {
  const [pokemonData, setPokemonData] = useState({
    results: [],
    next: null,
    prev: null,
  });
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0");

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(url);

        const data = await response.json();

        setPokemonData(data);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [url]);

  return (
    <main>
      <button
        type="button"
        onClick={() => {
          if (pokemonData.previous) setUrl(pokemonData.previous);
        }}
        disabled={pokemonData.previous === null}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => {
          if (pokemonData.next) setUrl(pokemonData.next);
        }}
        disabled={pokemonData.next === null}
      >
        Next Page
      </button>
      <ul>
        {pokemonData.results.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
