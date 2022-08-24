import CalculatorResponse from '../components/CalculatorResponse/CalculatorResponse'
import InputComponent from '../components/Input/Input'
import { Main, Content } from '../styles/global'
import { ReactElement, useState } from 'react'

const CalculatorIntegerToRomanNumeral = (): ReactElement => {
  const [inputValue, setValueInput] = useState('')
  return (
    <Main>
      <Content>
        <h1>Convert number to roman number</h1>
        <InputComponent
          inputValue={inputValue}
          setInputValue={(inputValueParam) => setValueInput(inputValueParam)} />
        <CalculatorResponse inputValue={inputValue} />
      </Content>
    </Main>
  )
}

export default CalculatorIntegerToRomanNumeral
