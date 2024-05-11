import { ChangeEvent, useEffect, useState } from "react";
import s from "./Settings.module.css";
type SettingsPropsType = {
  tempSettigns: { min: number; max: number };
  startValue: number;
  endValue: number;
  onSaveSettings: (inp: string, value: number) => void;
  onClickButtonHandler: () => void;
  setError: (error: boolean) => void;
};
export function Settings({
  startValue,
  endValue,
  onSaveSettings,
  setError,
}: SettingsPropsType) {
  const [minValue, setMinValue] = useState(startValue);
  const [maxValue, setMaxValue] = useState(endValue);
  useEffect(() => {}, [minValue, maxValue]);
  localStorage.removeItem("toggleMenu");
  useEffect(() => {
    const maxValueFromLocalStorage = localStorage.getItem(
      "SettingsMaxValueForCounterV2"
    );
    const minValueFromLocalStorage = localStorage.getItem(
      "SettingsMinValueForCounterV2"
    );
    if (maxValueFromLocalStorage) {
      setMaxValue(JSON.parse(maxValueFromLocalStorage));
    }
    if (minValueFromLocalStorage) {
      setMinValue(JSON.parse(minValueFromLocalStorage));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem(
      "SettingsMaxValueForCounterV2",
      JSON.stringify(maxValue)
    );
    localStorage.setItem(
      "SettingsMinValueForCounterV2",
      JSON.stringify(minValue)
    );
    if (minValue < 0) {
      setError(true);
    } else if (maxValue < 0) {
      setError(true);
    } else if (minValue >= maxValue) {
      setError(true);
    } else {
      setError(false);
    }
  }, [minValue, maxValue]);

  const onChangeInputMaxValHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(+e.currentTarget.value);
    onSaveSettings("max", +e.currentTarget.value);
  };

  const onChangeInputMinValHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(minValue);

    setMinValue(+e.currentTarget.value);
    onSaveSettings("min", +e.currentTarget.value);
  };
  return (
    <div>
      <div className={s.setting}>
        <span className={s.text}>Set max value:</span>
        <input
          type="number"
          name="maxValue"
          value={maxValue}
          onChange={onChangeInputMaxValHandler}
        />
      </div>
      <div className={s.setting}>
        <span className={s.text}>Set start value:</span>
        <input
          type="number"
          name="minValue"
          value={minValue}
          onChange={onChangeInputMinValHandler}
        />
      </div>
    </div>
  );
}
