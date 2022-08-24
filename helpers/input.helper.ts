export const inputValueIsValid = (inputValue: string): boolean => {
  if (!inputValue) return true
    const inputValueNumber = parseInt(inputValue);
    if (inputValueNumber > 0 && inputValueNumber <= 1000) {
      return true
    }
    return false
}
