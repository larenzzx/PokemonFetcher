import { useState, useEffect } from "react";

export const FetchPrac = () => {
    const [pokemons, setPokemons] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
                if (!response.ok) {
                    throw new Error('failed to fetch pokemon');
                }
                const data = await response.json();
                setPokemons(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchPokemon();
    }, []);

    if (loading) return <p>loading ...</p>
    if (error) return <p>error: {error}</p>

    return (
        <div>
            <h1>{pokemons.name}</h1>
            <img src={pokemons.sprites.other['official-artwork'].front_default} className="size-36" alt="" />
            <p>{pokemons.weight}</p>
            <p>{pokemons.height}</p>
            <ul>
                {pokemons.types.map((type) => (
                    <li key={type.type.name}>{type.type.name}</li>
                ))}
            </ul>

        </div>
    );
}