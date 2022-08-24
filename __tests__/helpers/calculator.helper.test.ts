import { convertNumberToRomanNumber } from "helpers/calculator.helper";

describe('test many result possibilities', () => {
  it('should match correct value with 99', () => {
    const inputValueParam = '99';
    const romanNumber = convertNumberToRomanNumber(inputValueParam);
    expect(romanNumber).toBe('XCIX');
  })

  it('should match correct value with 999', () => {
    const inputValueParam = '999';
    const romanNumber = convertNumberToRomanNumber(inputValueParam);
    expect(romanNumber).toBe('CMXCIX');
  })

  it('should match correct value with 9', () => {
    const inputValueParam = '9';
    const romanNumber = convertNumberToRomanNumber(inputValueParam);
    expect(romanNumber).toBe('IX');
  })

  it('should match correct value with 444', () => {
    const inputValueParam = '444';
    const romanNumber = convertNumberToRomanNumber(inputValueParam);
    expect(romanNumber).toBe('CDXLIV');
  })

  it('should match correct value with 44', () => {
    const inputValueParam = '44';
    const romanNumber = convertNumberToRomanNumber(inputValueParam);
    expect(romanNumber).toBe('XLIV');
  })

  it('should match correct value with 4', () => {
    const inputValueParam = '4';
    const romanNumber = convertNumberToRomanNumber(inputValueParam);
    expect(romanNumber).toBe('IV');
  })

  it('should match correct value with 8', () => {
    const inputValueParam = '8';
    const romanNumber = convertNumberToRomanNumber(inputValueParam);
    expect(romanNumber).toBe('VIII');
  })

  it('should match correct value with 1001', () => {
    const inputValueParam = '1001';
    const romanNumber = convertNumberToRomanNumber(inputValueParam);
    expect(romanNumber).toBe('');
  })

  it('should match correct value with 0', () => {
    const inputValueParam = '0';
    const romanNumber = convertNumberToRomanNumber(inputValueParam);
    expect(romanNumber).toBe('');
  })

  it('should match correct value with testWithoutNumber', () => {
    const inputValueParam = 'testWithoutNumber';
    const romanNumber = convertNumberToRomanNumber(inputValueParam);
    expect(romanNumber).toBe('');
  })


  it('should match correct value with -1', () => {
    const inputValueParam = '-1';
    const romanNumber = convertNumberToRomanNumber(inputValueParam);
    expect(romanNumber).toBe('');
  })


  it('should match correct value with 1000', () => {
    const inputValueParam = '1000';
    const romanNumber = convertNumberToRomanNumber(inputValueParam);
    expect(romanNumber).toBe('M');
  })
});