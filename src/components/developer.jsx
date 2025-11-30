import "../index.css";

function Developer({ name, age, country }) {
  return (
    <div className="developer-card">
      <h1>Developer: {name}</h1>
      <h2>Age: {age}</h2>
      <h2>Country: {country}</h2>
    </div>
  )
}

export default Developer;