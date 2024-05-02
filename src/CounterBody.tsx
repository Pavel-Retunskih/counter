import s from "./CounterBody.module.css";

type CounterPropsType = {
  counter: number;
  isCounterToHight: boolean;
};
export function CounterBody({ counter, isCounterToHight }: CounterPropsType) {
  return (
    <div className={s.counter}>
      <span className={isCounterToHight ? s.hight : s.normal}>{counter}</span>
    </div>
  );
}
