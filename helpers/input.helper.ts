import { CheckIfIsToShowMessageErrorProps, OnChangeInputValueProps } from "interfaces/input.interface"

export const validateInputValue = (inputValue: string): boolean => {
  if (inputValue) {
    const inputValueNumber = parseInt(inputValue);
    if (inputValueNumber > 0 && inputValueNumber <= 1000) {
      return false
    }
  }
  return true
}

export const checkIfIsToShowMessageError = (
  {
    inputValue,
    setIsToShowErrorMessage
  }: CheckIfIsToShowMessageErrorProps) => {
    setIsToShowErrorMessage(false)
    const valueIsValid = validateInputValue(inputValue);
    if (valueIsValid) {
      setIsToShowErrorMessage(true)
    }
}

export const onChangeInputValue = (
  {
    inputValue,
    setInputValue,
  } : OnChangeInputValueProps): void => {
    setInputValue(inputValue)
}