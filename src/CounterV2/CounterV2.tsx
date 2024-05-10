import { ChangeEvent, useState } from "react";
import s from "./CounterV2.module.css";
import { Button } from "../Button";
type CounterPropsType = {
  startValue: number;
  endValue: number;
  counter: number;
  counterReached: boolean;
  setCounterValue: (max: number, min: number) => void;
  incrementCounter: () => void;
  resetCounter: () => void;
};

export function CounterV2({
  startValue,
  endValue,
  counter,
  counterReached,
  setCounterValue,
  incrementCounter,
  resetCounter,
}: CounterPropsType) {
  const [menu, setMenu] = useState(false);
  const [maxValue, setMaxValue] = useState(endValue);
  const [minValue, setMinValue] = useState(startValue);
  const onClickButtonHandler = () => {
    setCounterValue(maxValue, minValue);
    setMenu(!menu);
  };

  const onChangeInputMaxValHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.currentTarget.value);
  };

  const onChangeInputMinValHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue(+e.currentTarget.value);
  };
  return (
    <div className={s.container}>
      <div className={s.display}>
        {menu ? (
          <div>
            <div className={s.setting}>
              <span className={s.text}>Set max value:</span>
              <input
                type="number"
                onChange={onChangeInputMaxValHandler}
                value={maxValue}
              />
            </div>
            <div className={s.setting}>
              <span className={s.text}>Set start value:</span>
              <input
                type="number"
                onChange={onChangeInputMinValHandler}
                value={minValue}
              />
            </div>
          </div>
        ) : (
          <div>
            <span className={!counterReached ? s.title : s.red}>{counter}</span>
          </div>
        )}
      </div>

      <div className={s.controls}>
        {!menu && <Button title="Increment" callBack={incrementCounter} />}
        <Button title="Set" callBack={onClickButtonHandler} />
        {!menu && <Button title="Reset" callBack={resetCounter} />}
      </div>
    </div>
  );
}
