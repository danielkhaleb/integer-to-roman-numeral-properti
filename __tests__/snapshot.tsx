import { render } from '@testing-library/react'
import CalculatorIntegerToRomanNumeral from '@/pages/index'

it('renders homepage unchanged', () => {
  const { container } = render(<CalculatorIntegerToRomanNumeral />)
  expect(container).toMatchSnapshot()
})
