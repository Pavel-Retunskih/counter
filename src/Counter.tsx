import { Settings } from "./Settings";

type CounterPropsType = {
  counter: number;
  counterReached: boolean;
  setCounterValue: (max: number, min: number) => void;
  incrementCounter: () => void;
  resetCounter: () => void;
};

export function Counter({
  counter,
  counterReached,
  setCounterValue,
  incrementCounter,
  resetCounter,
}: CounterPropsType) {
  return (
    <div>
      {!counterReached && <h1>{counter}</h1>}
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={resetCounter}>Reset</button>
      <Settings setCounterValue={(max, min) => setCounterValue(max, min)} />
    </div>
  );
}
