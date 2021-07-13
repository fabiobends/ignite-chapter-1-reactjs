import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  function handleCounter() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <p>{counter}</p>
      <button onClick={handleCounter}>Increment + 1</button>
    </div>
  );
}
