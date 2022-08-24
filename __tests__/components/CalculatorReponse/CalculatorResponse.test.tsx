import { render, screen } from '@testing-library/react'
import React from 'react'
import CalculatorResponse from '../../../components/CalculatorResponse/CalculatorResponse'

describe('renders test of CalculatorResponse component', () => {
  it('input renders correctly and check the final value with valid value', () => {
    const inputValue = '1000'
    render(
      <CalculatorResponse inputValue={inputValue}/>
    )

    expect(screen.getByTestId('spanResultMessage').textContent).toBe('Result: M')
  })
})

describe('renders test of CalculatorResponse component', () => {
  it('input renders correctly and check the final value with invalid value', () => {
    const inputValue = '1001'
    render(
      <CalculatorResponse inputValue={inputValue}/>
    )

    expect(screen.queryByText('Result: MI')).not.toBeInTheDocument()
  })
})
