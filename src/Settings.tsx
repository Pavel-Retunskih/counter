import { ChangeEvent, useState } from "react";
import s from "./Settings.module.css";
type SettingsPropsType = {
  setCounterValue: (maxValue: number, manValue: number) => void;
};

export function Settings({ setCounterValue }: SettingsPropsType) {
  const [maxValue, setMaxValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [error, setError] = useState<string | null>(null);
  return (
    <div>
      <input
        type="number"
        value={maxValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setMaxValue(+e.currentTarget.value);
        }}
      />
      <input
        type="number"
        value={minValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setMinValue(+e.currentTarget.value);
        }}
      />

      <button onClick={() => setCounterValue(maxValue, minValue)}>Set</button>
    </div>
  );
}
