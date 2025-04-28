import React, { useState } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleText = () => {
    setIsVisible(!isVisible);
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleText}>Toggle</button>
      {isVisible && <p>Hello, World!</p>}
    </div>
  );
}

export default ToggleText;
