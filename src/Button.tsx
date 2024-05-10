import s from "./Button.module.css";

type ButtonPropsType = {
  title: string;
  callBack: () => void;
  disabled?: boolean;
};
export function Button({ title, callBack, disabled }: ButtonPropsType) {
  return (
    <button className={s.button} onClick={callBack} disabled={disabled}>
      {title}
    </button>
  );
}
