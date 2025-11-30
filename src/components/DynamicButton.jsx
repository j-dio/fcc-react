import "../styles/index.css";

function DynamicButton({isActive}) {
  const buttonStyle = {
    backgroundColor: isActive ? 'green' : 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer',
  };

  return <button style={buttonStyle}>Login</button>;
}

export default DynamicButton;