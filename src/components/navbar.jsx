import { Link } from "react-router-dom"; // Import Link
import "../styles/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="nav-item">
          <Link to="/">Dashboard</Link> {/* Link to Home */}
        </li>
        <li className="nav-item">
          <a href="#">Widgets</a>
        </li>

        {/* Dropdown Menu */}
        <li className="nav-item">
          <button aria-expanded="false">Projects</button>
          <ul className="sub-menu" aria-label="Projects">
            <li>
              <Link to="/footballer-search">Footballer Search</Link>
            </li>
            <li>
              <Link to="/fruit-search">Fruit Search</Link>
            </li>
            <li>
              <Link to="/otp-generator">OTP Generator</Link>
            </li>
            <li>
              <Link to="/color-picker">Color Picker</Link>
            </li>
            <li>
              <Link to="/superhero-form">Superhero Application Form</Link>
            </li>
            <li>
              <Link to="/rsvp-form">Event RSVP</Link>
            </li>
            <li>
              <Link to="/shopping-list">Shopping List</Link>
            </li>
            <li>
              <Link to="/react-dev-tools">React Dev Tools</Link>
            </li>
            <li>
              <Link to="/currency-converter">Currency Converter</Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
