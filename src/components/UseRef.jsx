// 1st, import hook from react
// import { useRef } from 'react';

// 2nd, create variable that holds the ref with initial value null
// const sectionRef = useRef(null);

// 3rd, attach the ref to a JSX element using the ref attribute
// <section ref={sectionRef}>
//   {/* Content goes here */}
// </section>

// console.log(sectionRef); // { current: null }
// console.log(sectionRef.current); // null

import { useRef } from "react";

const Focus = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Enter text" />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default Focus;

/**
 * 

  Use refs mainly to interact with the DOM. You can also use them for mutable data, but state is a better choice for that.

  Don't use refs for basic state management – that is what useState is for.

  Make sure you check that ref.current exists before accessing its properties. Here's how to do that again:
  
  const handleFocus = () => {
  if (inputRef.current) {
    inputRef.current.focus();
  }
};

 */