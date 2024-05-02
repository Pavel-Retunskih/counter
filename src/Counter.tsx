import { ChangeEvent, useState } from "react";

type CounterPropsType = {
  counter: number;
  endValue: number;
  startValue: number;
  setStartValue: (value: number) => void;
  setEndValue: (value: number) => void;
  incrementCounter: () => void;
  resetCounter: () => void;
};

export function Counter({
  counter,
  endValue,
  startValue,
  setStartValue,
  setEndValue,
  incrementCounter,
  resetCounter,
}: CounterPropsType) {
  const [maxValue, setMaxValue] = useState(endValue);
  const [minValue, setMinValue] = useState(startValue);
  const valueReached = counter >= endValue;
  console.log(valueReached);

  const onClickValueSetHandler = () => {
    setEndValue(maxValue);
    setStartValue(minValue);
  };

  return (
    <div>
      {!valueReached && <h1>{counter}</h1>}
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={resetCounter}>Reset</button>
      <div>
        <input
          type="number"
          value={maxValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setMaxValue(+e.currentTarget.value);
          }}
        />
        <input
          type="number"
          value={minValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setMinValue(+e.currentTarget.value);
          }}
        />
        <button onClick={onClickValueSetHandler}>Set</button>
      </div>
    </div>
  );
}
