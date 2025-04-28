import { useState } from "react";

function CounterList() {
  // When you click + button, sometimes it does not update properly.
  // (Hint: Never mutate arrays directly.)

  //   { == BUG == }
  const [counters, setCounters] = useState([0, 0, 0]);

  function increaseCounter(index) {
    const newCounters = counters;
    newCounters[index]++;
    setCounters(newCounters);
  }

  return (
    <div>
      <h2>Counters</h2>
      {counters.map((count, idx) => (
        <div key={idx}>
          Counter {idx + 1}: {count}
          <button
            className="btn btn-primary"
            onClick={() => increaseCounter(idx)}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}

export default CounterList;
