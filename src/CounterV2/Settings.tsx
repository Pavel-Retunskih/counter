import { ChangeEvent, useEffect, useState } from "react";
import s from "./Settings.module.css";
type SettingsPropsType = {
  tempSettigns: { min: number; max: number };
  startValue: number;
  endValue: number;
  onSaveSettings: (inp: string, value: number) => void;
  onClickButtonHandler: () => void;
};
export function Settings({
  startValue,
  endValue,
  onSaveSettings,
}: SettingsPropsType) {
  const [minValue, setMinValue] = useState(startValue);
  const [maxValue, setMaxValue] = useState(endValue);

  const onChangeInputMaxValHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onSaveSettings("max", +e.currentTarget.value);
    setMaxValue(+e.currentTarget.value);
  };

  const onChangeInputMinValHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onSaveSettings("min", +e.currentTarget.value);
    setMinValue(+e.currentTarget.value);
  };
  return (
    <div>
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
  );
}
