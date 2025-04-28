import { useState, useEffect } from "react";

export const Pikachu = () => {
    const [pikachu, setPikachu] = useState(null);
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setPikachu(data);
        })
    }, [])

    return (
        <div>
            {pikachu ? (
                <div>
                    <h1>{pikachu.name}</h1>
                    <img src={pikachu.sprites.other['dream_world'].front_default} alt="" />
                    <h1>Base Experience: {pikachu.base_experience}</h1>
                    <ul>
                        {pikachu.types.map((type) => (
                            <li className="badge bg-yellow-300" key={type.type.name}>{type.type.name}</li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>loading ...</p>
            )}
        </div>
    );
}