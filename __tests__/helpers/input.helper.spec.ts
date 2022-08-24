import { validateInputValue } from "helpers/input.helper";
import { useState } from "react";

describe('test all functions that build input component', () => {
  it('should valid if the param input valid is between 1 and 1000 with value true', () => {
    const inputValueParam = '10';
    const inputValueIsValid = validateInputValue(inputValueParam);
    expect(inputValueIsValid).toBe(true);
  })

  it('should valid if the param input valid is between 1 and 1000 with value false', () => {
    const inputValueParam = '10000';
    const inputValueIsValid = validateInputValue(inputValueParam);
    expect(inputValueIsValid).toBe(false);
  })

  it('should valid if the param input valid is between 1 and 1000 with unexpected value string value', () => {
    const inputValueParam = 'dasdasdas';
    const inputValueIsValid = validateInputValue(inputValueParam);
    expect(inputValueIsValid).toBe(false);
  })
});