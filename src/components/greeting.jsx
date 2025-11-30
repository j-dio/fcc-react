import "../index.css";

function Greeting({ nameProp, ageProp, countryProp }) {
  return (
    <div className="developer-card">
      <h1>Developer: {nameProp}!</h1>
      <h2>Age: {ageProp}</h2>
      <h2>Country: {countryProp}</h2>
    </div>
  );
}

export default Greeting;
