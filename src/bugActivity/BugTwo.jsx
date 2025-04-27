import React, { useEffect } from "react";

function BugTwo() {
  // Every second, it should correctly count how many seconds passed.

  let seconds = 0;

  useEffect(() => {
    setInterval(() => {
      seconds++;
      console.log(`Seconds passed: ${seconds}`);
    }, 1000);
  }, []);

  return (
    <div>
      <h1>Timer Running...</h1>
    </div>
  );
}

export default BugTwo;
