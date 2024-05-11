type InputPropsType = {
  oldValue: number;
  onChangeInputValHandler: (newValue: number) => void;
};
export function Input({ oldValue, onChangeInputValHandler }: InputPropsType) {
  return (
    <input
      type="number"
      name="minValue"
      value={oldValue}
      onChange={(e) => onChangeInputValHandler(+e.currentTarget.value)}
    />
  );
}
