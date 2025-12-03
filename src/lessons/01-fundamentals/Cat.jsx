import "../../styles/index.css";

function Cat() {
  return (
    <div className="card">
      <h2>Mr. Whiskers</h2>
      <img
        src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg"
        alt="Tuxedo cats running on dirt ground."
        style={{ width: "50%" }}
      />
    </div>
  );
}

export default Cat;