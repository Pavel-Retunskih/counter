import { ChangeEvent, useEffect, useState } from "react";
import s from "./Settings.module.css";
import { Button } from "../Button";
import { Input } from "../CounterV2/Input";
type SettingsPropsType = {
  startValue: number;
  endValue: number;
  setCounterValue: (maxValue: number, manValue: number) => void;
  setMessage: (message: string) => void;
  setError: (error: boolean) => void;
};

export function Settings({
  setCounterValue,
  setMessage,
  setError,
  startValue,
  endValue,
}: SettingsPropsType) {
  const [maxValue, setMaxValue] = useState(endValue);
  const [minValue, setMinValue] = useState(startValue);

  const isStartValueMoreThanEndValue = minValue >= maxValue;
  const isStartValueAreCorrect = minValue < 0;
  const isEndValueAreCorrect = maxValue < 0;

  useEffect(() => {
    const maxValueFromLocalStorage = localStorage.getItem("SettingsMaxValue");
    const minValueFromLocalStorage = localStorage.getItem("SettingsMinValue");
    if (maxValueFromLocalStorage) {
      setMaxValue(+maxValueFromLocalStorage);
    }
    if (minValueFromLocalStorage) {
      setMinValue(+minValueFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("SettingsMaxValue", JSON.stringify(maxValue));
    localStorage.setItem("SettingsMinValue", JSON.stringify(minValue));

    if (isStartValueAreCorrect) {
      setMessage("Start value must be more than 0");
      setError(true);
    } else if (isEndValueAreCorrect) {
      setMessage("End value must be more than 0");
      setError(true);
    } else if (isStartValueMoreThanEndValue) {
      setMessage("Start value must be less than max value");
      setError(true);
    } else {
      setMessage("Enter the values end press Set button");
      setError(false);
    }
  }, [maxValue, minValue]);

  const onClickButtonHandler = () => {
    setCounterValue(maxValue, minValue);
    setMessage("");
  };

  return (
    <div className={s.settings}>
      <div className={s.inputs}>
        <div className={s.setting}>
          <span className={s.text}>Set max value:</span>
          <Input
            name="maxValue"
            oldValue={maxValue}
            onChangeInputValHandler={setMaxValue}
          />
        </div>
        <div className={s.setting}>
          <span className={s.text}>Set start value:</span>
          <Input
            name="minValue"
            oldValue={minValue}
            onChangeInputValHandler={setMinValue}
          />
        </div>
      </div>
      <div className={s.controls}>
        <Button title="Set" callBack={onClickButtonHandler} />
      </div>
    </div>
  );
}
