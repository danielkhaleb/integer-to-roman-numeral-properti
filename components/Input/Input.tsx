import { inputValueIsValid } from "helpers/input.helper";
import { InputComponentProps } from "interfaces/input.interface";
import { ReactElement, useState } from "react";
import { Container } from "./Input.styles";

const InputComponent = (
  {
    inputValue,
    setInputValue
  }: InputComponentProps): ReactElement => {
  const [isToShowErrorMessage, setIsToShowErrorMessage] = useState(false)
  return (
    <Container>
      <input
        type={"number"}
        placeholder="Please insert a integer number"
        value={inputValue}
        onChange={(currentValue) => {
          setInputValue(currentValue.target.value)
          setIsToShowErrorMessage(!inputValueIsValid(currentValue.target.value))
        }} />
        {isToShowErrorMessage
          && <span>This value is not valid, put a number between 1 and 1000</span>}
    </Container>
  );
}

export default  InputComponent