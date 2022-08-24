import { convertNumberToRomanNumber } from "helpers/calculator.helper";
import { CalculatorProps } from "interfaces/calculator.interface";
import { ReactElement } from "react";

const CalculatorResponse = (
  {
    inputValue,
  }: CalculatorProps): ReactElement => {
  return (
    <span>
      {convertNumberToRomanNumber(inputValue)}
    </span>
  );
}

export default CalculatorResponse