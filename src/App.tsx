import { useState } from "react";
import "./App.css";
import { Button } from "./Button";
import { Counter } from "./Counter";

function App() {
  const [counter, setCounter] = useState(0);
  const isCounterToHight = counter >= 5;

  const increaseCounter = () => {
    if (!isCounterToHight) {
      setCounter(counter + 1);
    }
  };

  return (
    <div className="container">
      <Counter counter={counter} isCounterToHight={isCounterToHight} />
      <div className="buttons">
        <Button
          callBack={increaseCounter}
          disabled={isCounterToHight}
          title="inc"
        />

        <Button
          callBack={() => {
            setCounter(0);
          }}
          disabled={!isCounterToHight}
          title="reset"
        />
      </div>
    </div>
  );
}

export default App;
