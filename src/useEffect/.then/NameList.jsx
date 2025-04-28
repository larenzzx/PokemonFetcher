import { useState, useEffect } from "react";

export const NameList = () => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setNames(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <ul className="space-y-12">
          {names.map((name, index) => (
            <div className="border" key={index}>
              <li>{name.username}</li>
              <li>{name.email}</li>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};
