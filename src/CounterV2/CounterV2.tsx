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
  useEffect(() => {
    const counterValuesFromLocalStorage = localStorage.getItem(
      "counterValuesForCounterV2"
    );
    if (counterValuesFromLocalStorage) {
      setCounterValues(JSON.parse(counterValuesFromLocalStorage));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "counterValuesForCounterV2",
      JSON.stringify(counterValues)
    );
  }, [counterValues]);

  const [tempSettigns, setTempSettings] = useState<{
    min: number;
    max: number;
  }>({ min: 0, max: 1 });
  const [menu, setMenu] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  //*******************USE EFFECT FOR TOGGLE MENU************************************** */
  useEffect(() => {
    const menuToggle = localStorage.getItem("toggleMenuForCounterV2");
    if (menuToggle) {
      setMenu(JSON.parse(menuToggle));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("toggleMenuForCounterV2", JSON.stringify(menu));
  }, [menu]);
  //****************************Check values********************************************* */
  const counterReached = counterValues.counter >= counterValues.endValue;
  //****************************SET STATES********************************************* */
  const incrementCounter = () => {
    setCounterValues({ ...counterValues, counter: counterValues.counter + 1 });
  };

  const resetCounter = () => {
    setCounterValues({ ...counterValues, counter: counterValues.startValue });
  };
  //*******************************HANDLERS************************************************* */
  const onSaveSettings = (inp: string, value: number) => {
    setTempSettings({
      ...tempSettigns,
      [inp]: value,
    });
  };

  const onClickButtonHandler = () => {
    if (menu) {
      setCounterValues({
        ...counterValues,
        counter: tempSettigns.min,
        startValue: tempSettigns.min,
        endValue: tempSettigns.max,
      });
      setMenu(!menu);
    } else setMenu(!menu);
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
            setError={setError}
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
        {!menu && (
          <Button
            title="Inc"
            callBack={incrementCounter}
            disabled={counterReached}
          />
        )}
        {!menu && <Button title="Res" callBack={resetCounter} />}
        <Button title="Set" callBack={onClickButtonHandler} disabled={error} />
      </div>
    </div>
  );
}
