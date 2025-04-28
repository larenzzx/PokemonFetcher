import React, { useEffect, useState } from "react";

function Time() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(time + 1);
    }, 1000);
  }, []);

  return <h1>{time}</h1>;
}

export default Time;
