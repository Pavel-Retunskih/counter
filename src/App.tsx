import { ReactElement, ReactEventHandler, useEffect, useState } from "react";
import "./App.css";
import { CounterV2 } from "./CounterV2/CounterV2";
import { CounterV1 } from "./CounterV1/CounterV1";
export type DataType = {
  counter: number;
  startValue: number;
  endValue: number;
};
function App() {
  //**************************STATES******************************************** */
  const [counterValues, setCounterValues] = useState<DataType>({
    counter: 0,
    startValue: 0,
    endValue: 1,
  });
  useEffect(() => {
    const counterValues = localStorage.getItem("counterValues");
    if (counterValues) {
      setCounterValues(JSON.parse(counterValues));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("counterValues", JSON.stringify(counterValues));
  }, [counterValues]);
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
  useEffect(() => {
    console.log(window.innerWidth);
  }, []);

  //*************************************************************************** */
  return (
    <div className="App">
      <CounterV1
        startValue={counterValues.startValue}
        endValue={counterValues.endValue}
        setCounterValue={setCounterValue}
        counterReached={counterReached}
        counter={counterValues.counter}
        incrementCounter={incrementCounter}
        resetCounter={resetCounter}
      />
      <CounterV2 />
    </div>
  );
}

export default App;
