import { inputValueIsValid } from './input.helper'

export const convertNumberToRomanNumber = (inputValueParam: string): string => {
  let symbolRomanResult = ''
  if (!inputValueIsValid(inputValueParam)) return symbolRomanResult

  const symbolRomanArray = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const numberArray = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let inputValueControl = parseInt(inputValueParam)
  for (let index = 0; index < numberArray.length; index++) {
    while (inputValueControl >= numberArray[index]) {
      symbolRomanResult = symbolRomanResult + symbolRomanArray[index]
      inputValueControl = inputValueControl - numberArray[index]
    }
  }
  return symbolRomanResult
}
