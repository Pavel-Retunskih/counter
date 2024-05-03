import { Settings } from "./Settings";
import s from "./Counter.module.css";
import { Button } from "./Button";
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
    <div className={s.container}>
      <Settings setCounterValue={(max, min) => setCounterValue(max, min)} />
      <div className={s.counter}>
        <div className={!counterReached ? s.title : s.red}>{counter}</div>
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
