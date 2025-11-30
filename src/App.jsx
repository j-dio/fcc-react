import "./styles/App.css";

// Components
import { Navbar } from "./components/Navbar";
import DynamicButton from "./components/DynamicButton";

// Fundamentals
import Greeting from "./lessons/01-fundamentals/Greeting";
import Cat from "./lessons/01-fundamentals/Cat";
import Developer from "./lessons/01-fundamentals/Developer";
import UserList from "./lessons/01-fundamentals/UserList";

// State
import Counter from "./lessons/02-state/Counter";
import UserProfile from "./lessons/02-state/UserProfile";
import ItemList from "./lessons/02-state/ItemsList";

// Forms
import SimpleForm from "./lessons/03-forms/SimpleForm";
import Greeter from "./lessons/03-forms/Greeter";

// Hooks
import FocusInput from "./lessons/04-hooks-deep-dive/FocusInput";
import EffectCounter from "./lessons/04-hooks-deep-dive/EffectCounter";

// Projects
import FootballerSearch from "./lessons/05-projects/FootballerSearch";
import FruitSearch from "./lessons/05-projects/FruitSearch";

function App() {
  const developerObj = {
    name: "Dio",
    age: 20,
    country: "Italy"
  };

  return (
    <>
      <Navbar />
      <main>
        <section>
          <h2>Fundamentals</h2>
          <Greeting nameProp="Bob" ageProp={19} countryProp="Philippines" />
          <Developer {...developerObj} />
          <Cat />
          <UserList />
        </section>

        <section>
          <h2>State</h2>
          <Counter />
          <DynamicButton />
          <UserProfile />
          <ItemList />
        </section>

        <section>
          <h2>Hooks & Forms</h2>
          <FocusInput />
          <EffectCounter />
          <SimpleForm />
          <Greeter />
        </section>
        
        <section>
          <h2>Mini Projects</h2>
          <FootballerSearch />
          <FruitSearch />
        </section>
      </main>
    </>
  );
}

export default App;