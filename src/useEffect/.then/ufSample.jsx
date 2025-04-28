import { useEffect, useState } from "react";

export const UFsample = () => {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1") //fetches #1 pokemon / bulbasaur
      .then((response) => response.json()) // parse the data or make it a javascript object
      .then((data) => { // saves the data
        console.log(data);
        setPokemon(data);
        setLoading(false);
      });

      // .then((data) => setPokemon(data))
  }, []);

  return (
    <div>
        <h1>Pokemon Data</h1>
        {loading ? (
          <p>Loading ...</p>
        ) : (
          <div>
                <p>Name: {pokemon.name}</p>
                <p>Weight: {pokemon.weight}</p>
                <p>Height: {pokemon.height}</p>
                <img src={pokemon.sprites.other["dream_world"].front_default} alt="" />
                <div>
                    weakness
                    <ul className="flex gap-2">
                        {pokemon.types.map((typeInfo) => (
                            <li className="badge badge-secondary" key={typeInfo.type.name}>{typeInfo.type.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </div>
  );
};
