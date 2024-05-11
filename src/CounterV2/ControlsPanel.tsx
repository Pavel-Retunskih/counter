import s from "./CounterV2.module.css";
import { Button } from "../Button";

type ControlPanelPropsType = {
  menu: boolean;
  incrementCounter: () => void;
  counterReached: boolean;
  resetCounter: () => void;
  onClickButtonHandler: () => void;
  error: boolean;
};

export function ControlsPanel({
  menu,
  incrementCounter,
  counterReached,
  resetCounter,
  onClickButtonHandler,
  error,
}: ControlPanelPropsType) {
  return (
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
  );
}
