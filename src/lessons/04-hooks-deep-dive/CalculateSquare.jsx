import { useState, useEffect } from "react";
import ExpensiveSquare from "./hook-components/ExpernsiveSquare";

function CalculateSquare() {
  const [timer, setTimer] = useState(0);
  const [num, setNum] = useState(0);

  // This timer forces the App to re-render every second
  useEffect(() => {
    const interval = setInterval(() => setTimer((c) => c + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Timer: {timer} seconds gone</h1>
      {/* Even though App re-renders, ExpensiveSquare won't recalculate unless num changes */}
      <ExpensiveSquare num={num} />
      <button onClick={() => setNum((n) => n + 1)}>Increase Number</button>
    </div>
  );
}

export default CalculateSquare;