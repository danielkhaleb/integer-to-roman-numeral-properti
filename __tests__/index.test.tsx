import { render, screen } from '@testing-library/react'
import CalculatorIntegerToRomanNumeral from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<CalculatorIntegerToRomanNumeral />)
    expect(screen.queryByText('Convert number to roman number')).toBeInTheDocument()
  })
})
