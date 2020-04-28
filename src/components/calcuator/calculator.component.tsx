import React, { useState } from 'react';
import CalculatorButton from '../calculator-button/calculator-button.component';
import CalculatorResult from '../calculator-result/calculator-result.component';

import calculatorButtonParse from '../../utils/calculatorButtonParse'
import calculatorOperation from '../../utils/calculatorOperation';

import { Row, CalculatorLayout } from './calculator.styles'

import { data } from './data';

const Calculator: React.FC = () => {

  const [operationText, setOperationText] = useState()
  const [result, setResult] = useState()

  const handleClickButton = (label: string): void => {
    const { operationText, result } = calculatorOperation(label, calculatorButtonParse(label))
    setOperationText(operationText)
    setResult(result)
  }

  const renderRows = () => data.map(item => (
    <Row key={JSON.stringify(item)}>
      {item.map(
        (element: {label: string, size?: 'big' | 'small' }) => (
          <CalculatorButton {...element} key={element.label} handleClick={handleClickButton} />
        )
      )}
    </Row>
  ))

  return (
    <CalculatorLayout>
      <CalculatorResult result={result} />
      {renderRows()}
      <div style={{ fontSize: '2rem', color: 'white' }}>{operationText}</div>
    </CalculatorLayout>
  )
}

export default Calculator
