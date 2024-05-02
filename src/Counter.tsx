import { useState } from "react";
import { Button } from "./Button";
import { CounterBody } from "./CounterBody";
import { SettingsMenu } from "./SettingsMenu";
import s from "./Counter.module.css";

export function Counter() {
  const [counter, setCounter] = useState<number>(0);
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const isCounterToHight = counter >= 5;

  const increaseCounter = () => {
    if (!isCounterToHight) {
      setCounter(counter + 1);
    }
  };

  const onClickOpenSettingsHeandler = () => {
    setOpenSettings(!openSettings);
  };

  return (
    <div className={s.container}>
      {openSettings ? (
        <CounterBody isCounterToHight={isCounterToHight} counter={counter} />
      ) : (
        <SettingsMenu addEndValue={() => {}} addStartValue={() => {}} />
      )}
      <div className={s.buttons}>
        <Button
          callBack={increaseCounter}
          disabled={isCounterToHight}
          title="inc"
        />
        <Button callBack={onClickOpenSettingsHeandler} title="set" />
        <Button
          callBack={() => {
            setCounter(0);
          }}
          disabled={!isCounterToHight}
          title="reset"
        />
      </div>
    </div>
  );
}
