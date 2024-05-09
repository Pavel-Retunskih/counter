import s from "./CounterTitle.module.css";
type CounterTitlePropsType = {
  counterReached: boolean;
  counter: number;
  message: string | null;
};

export function CounterTitle({
  counterReached,
  counter,
  message,
}: CounterTitlePropsType) {
  return (
    <div className={s.counter}>
      <div className={!counterReached ? s.title : s.red}>
        {!!message ? <span>{message}</span> : <span>{counter}</span>}
      </div>
    </div>
  );
}
