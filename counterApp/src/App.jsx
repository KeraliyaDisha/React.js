import { useState } from "react";
import "./App.css";

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
  };
  const removeValue = () => {
    counter = counter - 1;
    setCounter(counter)
  };
  return (
    <>
      <h1>CounterApp</h1>
      <h2>Counter Value: {counter}</h2>
      <button className="btn" onClick={addValue}>
        Add Value
      </button>
      <button className="btn" onClick={removeValue}>
        Remove Value
      </button>
    </>
  );
}

export default App;
