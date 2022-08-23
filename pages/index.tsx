import InputComponent from "@/components/Input/Input";
import { ReactElement, useState } from "react";

const CalculatorIntegerToRomanNumeral = (): ReactElement => {
  const [valueInput, setValueInput] = useState('')
  return (
    <>
      <InputComponent
        inputValue={valueInput}
        setInputValue={(inputValueParam) => setValueInput(inputValueParam)} />
    </>
  );
}

export default CalculatorIntegerToRomanNumeral;