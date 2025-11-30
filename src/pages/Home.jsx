import "../styles/App.css";

// Fundamentals
import Greeting from "../lessons/01-fundamentals/Greeting";
import Cat from "../lessons/01-fundamentals/Cat";
import Developer from "../lessons/01-fundamentals/Developer";
import UserList from "../lessons/01-fundamentals/UserList";

// State
import Counter from "../lessons/02-state/Counter";
import UserProfile from "../lessons/02-state/UserProfile";
import ItemList from "../lessons/02-state/ItemsList";

// Forms
import SimpleForm from "../lessons/03-forms/SimpleForm";
import Greeter from "../lessons/03-forms/Greeter";
import FetchUsers from "../lessons/03-forms/FetchUsers";

// Hooks
import FocusInput from "../lessons/04-hooks-deep-dive/FocusInput";
import EffectCounter from "../lessons/04-hooks-deep-dive/EffectCounter";


function Home() {
  const developerObj = { name: "Dio", age: 20, country: "Italy" };

  return (
    <div className="home-container">
      <h1>React Lessons Dashboard</h1>
      <Greeting nameProp="Bob" ageProp={19} countryProp="Ph" />
      <Developer {...developerObj} />
      <Cat />
      <UserList />
      <Counter />
      <SimpleForm />
      <Greeter />
      <FetchUsers />
      <FocusInput />
      <EffectCounter />
      <UserProfile />
      <ItemList />
    </div>
  );
}

export default Home;