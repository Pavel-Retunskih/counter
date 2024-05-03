import { ChangeEvent, useState } from "react";
import s from "./Settings.module.css";
import { Button } from "./Button";
type SettingsPropsType = {
  setCounterValue: (maxValue: number, manValue: number) => void;
};

export function Settings({ setCounterValue }: SettingsPropsType) {
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [error, setError] = useState<string | null>(null);
  return (
    <div className={s.settings}>
      <div>
        <span className={s.text}>set max value</span>
        <input
          type="number"
          value={maxValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setMaxValue(+e.currentTarget.value);
          }}
        />
      </div>
      <div>
        <span className={s.text}>set start value</span>
        <input
          type="number"
          value={minValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setMinValue(+e.currentTarget.value);
          }}
        />
      </div>
      <Button
        title="Set"
        callBack={() => setCounterValue(maxValue, minValue)}
      />
    </div>
  );
}
