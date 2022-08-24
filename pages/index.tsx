import CalculatorResponse from "@/components/CalculatorResponse/CalculatorResponse";
import InputComponent from "@/components/Input/Input";
import { ReactElement, useState } from "react";

const CalculatorIntegerToRomanNumeral = (): ReactElement => {
  const [inputValue, setValueInput] = useState('')
  return (
    <>
      <InputComponent
        inputValue={inputValue}
        setInputValue={(inputValueParam) => setValueInput(inputValueParam)} />
      <CalculatorResponse inputValue={inputValue}  />
    </>
  );
}

export default CalculatorIntegerToRomanNumeral;