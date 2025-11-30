// if there are lots of propertiesm we can use a style object
/* otherwise, we can pass in an object directly like this:
function Button({buttonText}) {
  return (
    <button 
      style={{
      backgroundColor: "#007BFF",
      color: "white",
      }}
    >
      {buttonText}
    </button>
  )
*/

// It's important to note that while CSS property names are typically written in kebab case, like font-size, in React's inline styles, we use camel case, like fontSize.

import "../styles/index.css";

function Button({ buttonText }) {
  const defaultStyles = {
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "4px",
    padding: "10px 20px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  return <button style={defaultStyles}>{buttonText}</button>;
}

export default Button;
