import s from "./CounterV2.module.css";
type CounterPropsType = {
  counterReached: boolean;
  counter: number;
};

export function CounterTitle({ counterReached, counter }: CounterPropsType) {
  return (
    <div>
      <span className={!counterReached ? s.title : s.red}>{counter}</span>
    </div>
  );
}
