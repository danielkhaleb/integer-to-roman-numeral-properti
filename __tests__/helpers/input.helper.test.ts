import { inputValueIsValid } from 'helpers/input.helper'

describe('test all functions that build input component', () => {
  it('should valid if the param input valid is between 1 and 1000 with value true', () => {
    const inputValueParam = '10'
    expect(inputValueIsValid(inputValueParam)).toBe(true)
  })

  it('should valid if the param input valid is between 1 and 1000 with value false', () => {
    const inputValueParam = '10000'
    expect(inputValueIsValid(inputValueParam)).toBe(false)
  })

  it('should valid if the param input valid is between 1 and 1000 with unexpected value string value', () => {
    const inputValueParam = 'testWithoutNumber'
    expect(inputValueIsValid(inputValueParam)).toBe(false)
  })
})
