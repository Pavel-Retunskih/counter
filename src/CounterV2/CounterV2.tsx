import { useEffect, useState } from "react";
import s from "./CounterV2.module.css";
import { DataType } from "../App";
import { Settings } from "./Settings";
import { CounterTitle } from "./CounterTitle";
import { ControlsPanel } from "./ControlsPanel";

export function CounterV2() {
  type TempDataType = {
    min: number;
    max: number;
  };
  const [counterValues, setCounterValues] = useState<DataType>({
    counter: 0,
    startValue: 0,
    endValue: 1,
  });
  const [tempSettings, setTempSettings] = useState<TempDataType>({
    min: 0,
    max: 1,
  });
  const [menu, setMenu] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  //***************************GET FROM LOCAL STORAGE*********************************** */
  useEffect(() => {
    const counterValuesFromLocalStorage = localStorage.getItem(
      "counterValuesForCounterV2"
    );
    const tempSettingsFromLocalStorage = localStorage.getItem(
      "tempSettingsForCounterV2"
    );
    const menuToggle = localStorage.getItem("toggleMenuForCounterV2");

    if (counterValuesFromLocalStorage) {
      setCounterValues(JSON.parse(counterValuesFromLocalStorage));
    }
    if (tempSettingsFromLocalStorage) {
      setTempSettings(JSON.parse(tempSettingsFromLocalStorage));
    }
    if (menuToggle) {
      setMenu(JSON.parse(menuToggle));
    }
  }, []);
  //*************************SET TO LOCAL STORAGE************************************ */
  useEffect(() => {
    localStorage.setItem(
      "counterValuesForCounterV2",
      JSON.stringify(counterValues)
    );
    localStorage.setItem(
      "tempSettingsForCounterV2",
      JSON.stringify(tempSettings)
    );
    localStorage.setItem("toggleMenuForCounterV2", JSON.stringify(menu));
  }, [counterValues, tempSettings, menu]);

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
      ...tempSettings,
      [inp]: value,
    });
  };

  const onClickButtonHandler = () => {
    if (menu) {
      setCounterValues({
        ...counterValues,
        counter: tempSettings.min,
        startValue: tempSettings.min,
        endValue: tempSettings.max,
      });
      setMenu(!menu);
    } else setMenu(!menu);
  };
  return (
    <div className={s.container}>
      <div className={s.display}>
        {menu ? (
          <Settings
            tempSettings={tempSettings}
            startValue={counterValues.startValue}
            endValue={counterValues.endValue}
            onSaveSettings={onSaveSettings}
            onClickButtonHandler={onClickButtonHandler}
            setError={setError}
          />
        ) : (
          <CounterTitle
            counter={counterValues.counter}
            counterReached={counterReached}
          />
        )}
      </div>
      <ControlsPanel
        menu={menu}
        error={error}
        counterReached={counterReached}
        incrementCounter={incrementCounter}
        resetCounter={resetCounter}
        onClickButtonHandler={onClickButtonHandler}
      />
    </div>
  );
}
