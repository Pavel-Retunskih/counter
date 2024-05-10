import { ChangeEvent, useEffect, useState } from "react";
import s from "./CounterV2.module.css";
import { Button } from "../Button";
import { DataType } from "../App";
import { Settings } from "./Settings";

export function CounterV2() {
  const [counterValues, setCounterValues] = useState<DataType>({
    counter: 0,
    startValue: 0,
    endValue: 1,
  });
  const [tempSettigns, setTempSettings] = useState<{
    min: number;
    max: number;
  }>({ min: 0, max: 1 });

  const [menu, setMenu] = useState(false);
  const onSaveSettings = (inp: string, value: number) => {
    setTempSettings({
      ...tempSettigns,
      [inp]: value,
    });
  };

  const onClickButtonHandler = () => {
    setCounterValues({
      ...counterValues,
      counter: tempSettigns.min,
      startValue: tempSettigns.min,
      endValue: tempSettigns.max,
    });
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

  return (
    <div className={s.container}>
      <div className={s.display}>
        {menu ? (
          <Settings
            tempSettigns={tempSettigns}
            startValue={counterValues.startValue}
            endValue={counterValues.endValue}
            onSaveSettings={onSaveSettings}
            onClickButtonHandler={onClickButtonHandler}
          />
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
