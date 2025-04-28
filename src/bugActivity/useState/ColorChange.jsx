import React, { useState } from "react";

function ColorChanger() {
  // Bug: State update is wrongly called.
  const [color, setColor] = useState("red");

  const changeColor = () => {
    color("blue");

    // ans: setColor("blue");
  };

  return (
    <div style={{ backgroundColor: color, height: "100px" }}>
      <button className="btn" onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
}

export default ColorChanger;
