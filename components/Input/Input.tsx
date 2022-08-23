import { checkIfIsToShowMessageError, onChangeInputValue } from "helpers/input.helper";
import { InputComponentProps } from "interfaces/input.interface";
import { ReactElement, useState } from "react";

const InputComponent = (
  {
    inputValue,
    setInputValue
  }: InputComponentProps): ReactElement => {
  const [isToShowErrorMessage, setIsToShowErrorMessage] = useState(false)
  return (
    <>
      <input
        type={"number"}
        value={inputValue}
        onChange={(currentValue) => {
          onChangeInputValue({
            inputValue: currentValue.target.value,
            setInputValue
          })
          checkIfIsToShowMessageError({
            inputValue: currentValue.target.value,
            setIsToShowErrorMessage
          })
        }} />
        {isToShowErrorMessage
          && <span>This value is not valid, put a number between 1 and 1000</span>}
    </>
  );
}

export default  InputComponent