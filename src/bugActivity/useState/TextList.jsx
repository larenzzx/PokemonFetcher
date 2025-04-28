import React, { useState } from 'react';

function TextList() {
  // will not render because the setTexts is updating and adding an array
  const [texts, setTexts] = useState('');

  //ans
  // const [texts, setTexts] = useState([]);

  const addText = () => {
    setTexts([...texts, 'New Text']);
  };

  return (
    <div>
      <button onClick={addText}>Add Text</button>
      <ul>
        {texts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TextList;
