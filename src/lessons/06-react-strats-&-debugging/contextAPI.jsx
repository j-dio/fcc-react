/** 
 * Created a context and a provider to share a count state across the application
 * CounterProvider - uses useState hook to init and manage the count state and its setter. Both are passed into child components through the Provider
 * 
import { CounterProvider } from './context/CounterContext';

function App() {
  return (
    <CounterProvider>
        {App components}
    </CounterProvider>
  );
}

export default App;

*/
import { useState, createContext } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
