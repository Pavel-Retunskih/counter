import { useState } from "react";
import "./App.css";

import { Counter } from "./Counter";
export type DataType = {
  counter: number;
  startValue: number;
  endValue: number;
};
function App() {
  const data: DataType = {
    counter: 0,
    startValue: 0,
    endValue: 10,
  };
  //********************************************************************** */
  const [counterValues, setCounterValues] = useState(data);

  //************************************************************************* */
  const setStartValue = (value: number) => {
    setCounterValues({ ...counterValues, startValue: value, counter: value });
  };
  const setEndValue = (value: number) => {
    setCounterValues({ ...counterValues, endValue: value });
  };
  const incrementCounter = () => {
    setCounterValues({ ...counterValues, counter: counterValues.counter + 1 });
  };
  const resetCounter = () => {
    setCounterValues({ ...counterValues, counter: counterValues.startValue });
  };
  //*************************************************************************** */

  return (
    <div className="container">
      <Counter
        counter={counterValues.counter}
        endValue={counterValues.endValue}
        startValue={counterValues.startValue}
        setStartValue={setStartValue}
        setEndValue={setEndValue}
        incrementCounter={incrementCounter}
        resetCounter={resetCounter}
      />
    </div>
  );
}

export default App;
