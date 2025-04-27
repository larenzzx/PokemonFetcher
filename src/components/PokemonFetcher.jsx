import { useState, useEffect } from "react";

export const PokemonFetcher = () => {
    const [pokemon, setPokemon] = useState(null); // for saving the fetched pokemon info
    const [loading, setLoading] = useState(true); // to show loading state
    const [error, setError] = useState(null); // to save error if something goes wrong

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon/bulbasaur'); // fetch
                if (!response.ok) {
                    throw new Error('Failed to fetch Pokemon'); // ther Error() automatically puts the error to .message
                }
                const data = await response.json(); // convert the response into a javascript object
                setPokemon(data); // save the pokemon data to the state
                setLoading(false); // done loading
            } catch (error) {
                setError(error.message); // access the error message
                setLoading(false);
            }
        };
        fetchPokemon(); // calling the function to fetch 
    }, []);
    // empty array means "run this effect only once when the page loads"

    //displying loading
    if (loading) return <p className="animate-bounce">Loading ...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h1 className="uppercase">{pokemon.name}</h1>
            <img className="size-30" src={pokemon.sprites.other['official-artwork'].front_default} alt="" />
            <p>{pokemon.weight}</p>
            <p>{pokemon.height}</p>
            {/* {pokemon.types.map((typeInfo) => (
                <p key={typeInfo.type.name}>{typeInfo.type.name}</p>
            ))} */}
            {/* or */}
            <ul className="flex gap-2">
                {pokemon.types.map((typeInf, index) => (
                    <li className="badge badge-sm badge-primary" key={index}>{typeInf.type.name}</li>
                ))}
            </ul>
        </div>
    );
}