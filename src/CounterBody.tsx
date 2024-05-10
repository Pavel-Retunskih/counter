import { Button } from "./Button";
import s from "./CounterBody.module.css";
import { CounterTitle } from "./CounterTitle";
type CounterBodyPropsType = {
  counterReached: boolean;
  error: boolean;
  counter: number;
  message: string;
  incrementCounter: () => void;
  resetCounter: () => void;
};

export function CounterBody({
  counter,
  message,
  error,
  counterReached,
  incrementCounter,
  resetCounter,
}: CounterBodyPropsType) {
  return (
    <div className={s.counterBody}>
      <CounterTitle
        counterReached={counterReached}
        counter={counter}
        message={message}
        error={error}
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
  );
}
