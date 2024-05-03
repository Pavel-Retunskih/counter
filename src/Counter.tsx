import { Settings } from "./Settings";
import s from "./Counter.module.css";
import { Button } from "./Button";
import { useState } from "react";
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
  const [message, setMessage] = useState<string | null>(null);
  return (
    <div className={s.container}>
      <Settings
        setCounterValue={(max, min) => setCounterValue(max, min)}
        setMessage={setMessage}
        startValue={startValue}
        endValue={endValue}
      />
      <div className={s.counter}>
        <div className={!counterReached ? s.title : s.red}>
          {message ? message : counter}
        </div>
        <div className={s.controls}>
          <Button
            title="Increment"
            callBack={incrementCounter}
            disabled={counterReached}
          />
          <Button title="Reset" callBack={resetCounter} />
        </div>
      </div>
    </div>
  );
}
