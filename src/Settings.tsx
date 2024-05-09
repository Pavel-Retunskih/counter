import { ChangeEvent, useState } from "react";
import s from "./Settings.module.css";
import { Button } from "./Button";
type SettingsPropsType = {
  startValue: number;
  endValue: number;
  setCounterValue: (maxValue: number, manValue: number) => void;
  setMessage: (message: string | null) => void;
};

export function Settings({
  setCounterValue,
  setMessage,
  endValue,
  startValue,
}: SettingsPropsType) {
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const onClickButtonHandler = () => {
    setCounterValue(maxValue, minValue);
    setMessage(null);
  };
  const onChangeInputMaxValHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value > 0) {
      setMaxValue(+e.currentTarget.value);
      setMessage("Enter values and press 'set'");
    } else {
      setError("Incorrect value!");
      setMessage(error);
    }
  };
  const onChangeInputMinValHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (+e.currentTarget.value > 0) {
      setMinValue(+e.currentTarget.value);
      setMessage("Enter values and press 'set'");
    } else {
      setError("Incorrect value!");
      setMessage(error);
    }
  };

  return (
    <div className={s.settings}>
      <div className={s.inputs}>
        <div className={s.setting}>
          <span className={s.text}>Set max value:</span>
          <input
            type="number"
            value={maxValue}
            onChange={onChangeInputMaxValHandler}
          />
        </div>
        <div className={s.setting}>
          <span className={s.text}>Set start value:</span>
          <input
            type="number"
            value={minValue}
            onChange={onChangeInputMinValHandler}
          />
        </div>
      </div>
      <div className={s.controls}>
        <Button title="Set" callBack={onClickButtonHandler} />
      </div>
    </div>
  );
}
