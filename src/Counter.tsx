import { Settings } from "./Settings";
import s from "./Counter.module.css";
import { useState } from "react";
import { CounterBody } from "./CounterBody";
type CounterPropsType = {
  startValue: number;
  endValue: number;
  counter: number;
  counterReached: boolean;
  setCounterValue: (max: number, min: number) => void;
  incrementCounter: () => void;
  resetCounter: () => void;
};

export function Counter({
  startValue,
  endValue,
  counter,
  counterReached,
  setCounterValue,
  incrementCounter,
  resetCounter,
}: CounterPropsType) {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  return (
    <div className={s.container}>
      <Settings
        setCounterValue={(max, min) => setCounterValue(max, min)}
        startValue={startValue}
        error={error}
        endValue={endValue}
        setMessage={setMessage}
        setError={setError}
      />
      <CounterBody
        counter={counter}
        message={message}
        error={error}
        counterReached={counterReached}
        incrementCounter={incrementCounter}
        resetCounter={resetCounter}
      />
    </div>
  );
}
