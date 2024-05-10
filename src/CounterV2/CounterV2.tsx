import { ChangeEvent, useState } from "react";
import s from "./CounterV2.module.css";
import { Button } from "../Button";
import { DataType } from "../App";

export function CounterV2() {
  const [counterValues, setCounterValues] = useState<DataType>({
    counter: 0,
    startValue: 0,
    endValue: 1,
  });
  const [menu, setMenu] = useState(false);
  const [maxValue, setMaxValue] = useState(counterValues.endValue);
  const [minValue, setMinValue] = useState(counterValues.startValue);
  const onClickButtonHandler = () => {
    setCounterValue(maxValue, minValue);
    setMenu(!menu);
  };

  //****************************Check values********************************************* */
  const counterReached = counterValues.counter >= counterValues.endValue;
  //****************************SET STATES********************************************* */
  const incrementCounter = () => {
    setCounterValues({ ...counterValues, counter: counterValues.counter + 1 });
  };

  const resetCounter = () => {
    setCounterValues({ ...counterValues, counter: counterValues.startValue });
  };

  const setCounterValue = (max: number, min: number) => {
    setCounterValues({
      ...counterValues,
      startValue: min,
      counter: min,
      endValue: max,
    });
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
            <span className={!counterReached ? s.title : s.red}>
              {counterValues.counter}
            </span>
          </div>
        )}
      </div>

      <div className={s.controls}>
        {!menu && <Button title="Inc" callBack={incrementCounter} />}
        {!menu && <Button title="Res" callBack={resetCounter} />}
        <Button title="Set" callBack={onClickButtonHandler} />
      </div>
    </div>
  );
}
