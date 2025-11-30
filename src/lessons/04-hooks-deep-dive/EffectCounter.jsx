import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component renders");
  }, [count]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h2>{count}</h2>
      <div>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
        <button onClick={() => setCount(count - 1)}>Decrease count</button>
      </div>
    </div>
  );
};

export default Counter;

/**
 * returning a cleanup funcition in useEffect:
  useEffect(() => {
    // Side effect logic here
    return () => {
      // Cleanup logic here
    };
  }, [dependencies]);

  for instance, adding a scroll event listener to window:
  useEffect(() => {
    const handleScroll = () => {
      console.log("User scrolled:", window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  This ensures that the event listener is properly removed when the component unmounts or before the effect runs again, preventing potential memory leaks or unwanted behavior.
 */