import { useState, useEffect } from "react";

export const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((response) => response.json())
      .then((data) => {
        // fetches only the name and url
        // console.log(data);
        // setPokemons(data.results);

        // this is to get all the pokemon data not just the name and url
        Promise.all(
          data.results.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
          )
        ).then((fullPokemonData) => {
          console.log(fullPokemonData);
          setPokemons(fullPokemonData);
        });
      });
  }, []);

  return (
    <div>
      {pokemons ? (
        <div className="grid grid-cols-3 gap-5 place-items-center">
          {pokemons.map((pokemon, index) => (
            <div className="bg-yellow-400" key={index}>
              <p>{pokemon.name}</p>
              <img
                className="size-64"
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt=""
              />
              <p>Weight: {pokemon.weight}</p>
              <p>Height: {pokemon.height}</p>
              <ul className="flex">
                {pokemon.types.map((type) => (
                  <li
                    className="badge badge-sm badge-primary"
                    key={type.type.name}
                  >
                    {type.type.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};
