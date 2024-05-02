import { ChangeEvent, useState } from "react";

type SettingsMenuPropsType = {
  addStartValue: (value: number) => void;
  addEndValue: (value: number) => void;
};
export function SettingsMenu({
  addStartValue,
  addEndValue,
}: SettingsMenuPropsType) {
  const [startValue, setStartValue] = useState<number>(0);
  const [endtValue, setEndValue] = useState<number>(0);

  return (
    <div>
      <div>
        <span>max value:</span>
        <input
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEndValue(+e.currentTarget.value)
          }
        />
      </div>
      <div>
        <span>start value:</span>
        <input
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setEndValue(+e.currentTarget.value)
          }
        />
      </div>
    </div>
  );
}
