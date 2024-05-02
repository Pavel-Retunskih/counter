type CounterPropsType = {
  counter: number;
  isCounterToHight: boolean;
};
export function Counter({ counter, isCounterToHight }: CounterPropsType) {
  return (
    <div className="counter">
      <span className={isCounterToHight ? "hight" : "normal"}>{counter}</span>
    </div>
  );
}
