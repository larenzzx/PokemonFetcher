import React, { useState, useEffect } from "react";

function BugFour() {
  // Fetch first 10 Pokémon from PokéAPI.

  //Display each Pokémon's image and name.

  
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res)
      .then((data) => {
        setPokemons(data.results);
      });
  }, []);

  return (
    <div>
      <h1>Pokemon List</h1>
      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BugFour;
