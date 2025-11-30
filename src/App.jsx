import "./App.css";
import Greeting from "./components/greeting.jsx";
import Cat from "./components/cat.jsx";
import { Navbar } from "./components/navbar.jsx";
import Developer from "./components/developer.jsx";
import User from "./components/UserList.jsx"
import DynamicButton from "./components/DynamicButton.jsx";
import Counter from "./components/Counter.jsx";
import UserProfile from "./components/RefactoredUserProfile.jsx";
import ItemList from "./components/ItemsList.jsx";
import InputRef from "./components/UseRef.jsx";
import UseEffectCounter from "./components/UseEffect.jsx"
import FootballerSearch from "./components/FootBallerSearchUsingDebounceHook.jsx";
import FruitSearch from "./freeCodeCampLabs&WS/state&hooks&routing/FruitSearchApp.jsx";
import Form from "./components/Forms.jsx";
import Greeter  from "./components/UseActionSatate.jsx";

function App() {

  const developerObj = {
    name: "Dio",
    age: 20,
    country: "Italy"
  }

  return (
    <>
      <Navbar />
      <Greeting nameProp="Bob the fucking Builder" ageProp={19} countryProp="Philippines" />
      <Greeting nameProp="Alice in Wonderland" ageProp={17} countryProp="USA"/>
      <Developer {...developerObj} />
      <Cat />
      <User />
      <DynamicButton />
      <Counter />
      <UserProfile />
      <ItemList />
      <InputRef />
      <UseEffectCounter />
      <FootballerSearch />
      <FruitSearch />
      <Form />
      <Greeter />
    </>
  );
}

export default App;
