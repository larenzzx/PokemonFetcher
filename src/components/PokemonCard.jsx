import { useState, useEffect } from "react";

export const PokemonCard = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=151"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch pokemon list");
        }
        const data = await response.json();

        // Fetch details for each Pokémon
        const pokemonDetails = await Promise.all(
          data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            return await res.json();
          })
        );

        setPokemons(pokemonDetails);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  if (loading)
    return (
      <div className="bg-yellow-600 h-screen flex items-center justify-center">
        <p className="animate-bounce">loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="bg-red-600 h-screen flex items-center justify-center">
        <p className="animate-bounce">Error: {error}</p>
      </div>
    );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="card bg-base-100 w-72 shadow-sm">
          <figure className="bg-yellow-200">
            <img
              className="size-48"
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase">{pokemon.name}</h2>
            <div className="card-actions justify-between items-center border">
              <ul>
                {pokemon.types.map((typeInfo) => (
                  <li key={typeInfo.type.name}>{typeInfo.type.name}</li>
                ))}
              </ul>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
