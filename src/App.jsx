import { Routes, Route } from "react-router-dom";
import "./styles/App.css"
import { Navbar } from "./components/navbar";

import Home from "./pages/Home";

import FootballerSearch from "./lessons/05-projects/FootballerSearch";
import FruitSearch from "./lessons/05-projects/FruitSearch";
import { ColorPicker } from "./lessons/05-projects/ColorPicker";
import { OTPGenerator } from "./lessons/04-hooks-deep-dive/OTPGenerator";
import { SuperheroForm } from "./lessons/05-projects/SuperheroApplicationForm";
import { EventRSVPForm } from "./lessons/05-projects/EventRSVP";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footballer-search" element={<FootballerSearch />} />
        <Route path="/fruit-search" element={<FruitSearch />} />
        <Route path="/color-picker" element={<ColorPicker />} />
        <Route path="/otp-generator" element={<OTPGenerator />} />
        <Route path="/superhero-form" element={<SuperheroForm />} />
        <Route path="/rsvp-form" element={<EventRSVPForm />} />
      </Routes>
    </>
  )
}

export default App;