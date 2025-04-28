import React, { useState } from "react";

function Counter() {
 // counter not properly working

  // { BUG }
  const [count, setCount] = useState();

  function handleCount() {
    count(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={handleCount}>Click Me!</button>
    </div>
  );
}

export default Counter;
