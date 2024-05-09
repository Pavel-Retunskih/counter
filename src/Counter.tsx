import { Settings } from "./Settings";
import s from "./Counter.module.css";
import { Button } from "./Button";
import { useState } from "react";
import { CounterTitle } from "./CounterTitle";
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

  return (
    <div className={s.container}>
      <Settings
        setCounterValue={(max, min) => setCounterValue(max, min)}
        startValue={startValue}
        endValue={endValue}
        setMessage={setMessage}
      />
      <div>
        <CounterTitle
          counterReached={counterReached}
          counter={counter}
          message={message}
        />
        <div className={s.controls}>
          <Button
            title="Increment"
            callBack={incrementCounter}
            disabled={counterReached || !!message}
          />
          <Button title="Reset" callBack={resetCounter} />
        </div>
      </div>
    </div>
  );
}
