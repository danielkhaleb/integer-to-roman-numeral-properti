import { CalculatorProps } from "./calculator.interface";

export interface InputComponentProps extends CalculatorProps {
  setInputValue: (inputValue: string) => void,
}