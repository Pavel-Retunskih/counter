import s from "./CounterTitle.module.css";

type CounterTitlePropsType = {
  counterReached: boolean;
  error: boolean;
  counter: number;
  message: string | null;
};

export function CounterTitle({
  counterReached,
  error,
  counter,
  message,
}: CounterTitlePropsType) {
  return (
    <div className={s.counter}>
      {message ? (
        <span className={!error ? s.message : s.error}>{message}</span>
      ) : (
        <span className={!counterReached ? s.title : s.red}>{counter}</span>
      )}
    </div>
  );
}
