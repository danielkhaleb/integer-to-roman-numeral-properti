import { Dispatch, SetStateAction } from "react"

export interface InputComponentProps {
  setInputValue: (inputValue: string) => void,
  inputValue: string
}

export interface CheckIfIsToShowMessageErrorProps {
  inputValue: string
}