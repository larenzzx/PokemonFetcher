import { useState } from "react";

function FruitList() {
  // The list does not appear.
  // (Hint: Check return inside .map.)
  
  const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"]);

  return (
    <div>
      {/* BUG */}
      <h2>Fruits</h2>
      {fruits.map((fruit) => {
        <p>{fruit}</p>;
      })}
    </div>
  );
}

export default FruitList;
