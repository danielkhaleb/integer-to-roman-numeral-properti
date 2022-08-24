import { convertNumberToRomanNumber } from "helpers/calculator.helper";
import { CalculatorProps } from "interfaces/calculator.interface";
import { ReactElement } from "react";

const CalculatorResponse = (
  {
    inputValue,
  }: CalculatorProps): ReactElement => {
  const romanNumber = convertNumberToRomanNumber(inputValue)
  return (
    <>
      {romanNumber && <span>
        Result: <b>{romanNumber}</b>
      </span>}
    </>
  );
}

export default CalculatorResponse