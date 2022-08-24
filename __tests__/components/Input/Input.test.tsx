import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import InputComponent from '../../../components/Input/Input'

describe('renders test of Input component', () => {
  it('input renders correctly', () => {
    const inputValue = '1001';
    render(
      <InputComponent
        inputValue={inputValue}
        setInputValue={() => {}}
      />
    )

    expect(screen.getByTestId('inputComponent')).toBeTruthy()
  })

  it('test if the param set to input value', () => {
    const inputValue = '1001';
    render(
      <InputComponent
        inputValue={inputValue}
        setInputValue={() => {}}
      />
    )

    expect(screen.getByTestId('inputComponent')).toHaveValue(1001);
  })

  it('test if message appear when the value is invalid', async () => {
    const inputValue = '1001';
    render(
      <InputComponent
        inputValue={inputValue}
        setInputValue={() => {}}
      />
    )

    await waitFor(() => {
      expect(screen.getByTestId('spanErrorMessage').textContent).toBe('This value is not valid, put a number between 1 and 1000');
    })
  })
})