import { Dispatch, SetStateAction } from "react"

export interface InputComponentProps {
  setInputValue: (inputValue: string) => void,
  inputValue: string
}

export interface OnChangeInputValueProps extends InputComponentProps {}

export interface CheckIfIsToShowMessageErrorProps {
  inputValue: string
  setIsToShowErrorMessage: Dispatch<SetStateAction<boolean>>,
}