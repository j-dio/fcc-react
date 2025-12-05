import "../styles/Home.css";

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
import FetchPosts from "../lessons/04-hooks-deep-dive/FetchPosts";
import Tasks from "../lessons/04-hooks-deep-dive/Tasks";
import CalculateSquare from "../lessons/04-hooks-deep-dive/CalculateSquare";
import CounterCallback from "../lessons/04-hooks-deep-dive/Counter";



function Home() {
  const developerObj = { name: "Dio", age: 20, country: "Italy" };

  return (
    <div className="home-container">
      <h1>React Lessons Dashboard</h1>
      <div className="lessons-grid">

        <div className="lesson-category">
          <h2>Fundamentals</h2>
          <div className="lesson-content">
            <Greeting nameProp="Bob" ageProp={19} countryProp="Ph" />
            <Developer {...developerObj} />
            <Cat />
            <UserList />
          </div>
        </div>

        <div className="lesson-category">
          <h2>State Management</h2>
          <div className="lesson-content">
            <Counter />
            <UserProfile />
            <ItemList />
          </div>
        </div>

        <div className="lesson-category">
          <h2>Forms</h2>
          <div className="lesson-content">
            <SimpleForm />
            <Greeter />
            <FetchUsers />
          </div>
        </div>

        <div className="lesson-category">
          <h2>Hooks Deep Dive</h2>
          <div className="lesson-content">
            <FocusInput />
            <EffectCounter />
            <FetchPosts />
          </div>
        </div>

        <div className="lesson-category">
          <h2>Hooks Part 2</h2>
          <div className="lesson-content">
            <Tasks />
            <CalculateSquare />
            <CounterCallback />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;