import React, { useEffect, useState } from "react";

function RandomDog() {
  const [randomDog, setRandomDog] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response)
    .then((data) => {
        setRandomDog(data.message);
        setLoading(false);
    })
  }, [])

  return (
    <div>
        {loading ? (
            <p>Loading ...</p>
        ) : (
            <img src={randomDog} alt="" />
        )}
    </div>
  );
}

export default RandomDog;
