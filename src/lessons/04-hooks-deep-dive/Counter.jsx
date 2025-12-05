import { useState, useEffect, useCallback } from "react";
import CounterChild from "./CounterChild";

function CounterCallback() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Time: {timer}</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
      <CounterChild onClick={handleClick} />
    </div>
  );
}

export default CounterCallback;
