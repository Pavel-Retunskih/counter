type InputPropsType = {
  oldValue: number;
  onChangeInputValHandler: (newValue: number) => void;
  name: string;
};
export function Input({
  oldValue,
  name,
  onChangeInputValHandler,
}: InputPropsType) {
  return (
    <input
      type="number"
      name={name}
      value={oldValue}
      onChange={(e) => onChangeInputValHandler(+e.currentTarget.value)}
    />
  );
}
