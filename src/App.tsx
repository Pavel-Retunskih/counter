import { useState } from "react";
import "./App.css";
import { Counter } from "./CounterV1/Counter";

function App() {
  type DataType = {
    counter: number;
    startValue: number;
    endValue: number;
  };
  //**************************STATES******************************************** */
  const [counterValues, setCounterValues] = useState<DataType>({
    counter: 0,
    startValue: 0,
    endValue: 1,
  });

  //****************************Check values********************************************* */
  const counterReached = counterValues.counter >= counterValues.endValue;
  //****************************SET STATES********************************************* */
  const incrementCounter = () => {
    setCounterValues({ ...counterValues, counter: counterValues.counter + 1 });
  };

  const resetCounter = () => {
    setCounterValues({ ...counterValues, counter: counterValues.startValue });
  };

  const setCounterValue = (max: number, min: number) => {
    setCounterValues({
      ...counterValues,
      startValue: min,
      counter: min,
      endValue: max,
    });
  };

  //*************************************************************************** */

  return (
    <>
      <Counter
        startValue={counterValues.startValue}
        endValue={counterValues.endValue}
        setCounterValue={setCounterValue}
        counterReached={counterReached}
        counter={counterValues.counter}
        incrementCounter={incrementCounter}
        resetCounter={resetCounter}
      />
    </>
  );
}

export default App;
