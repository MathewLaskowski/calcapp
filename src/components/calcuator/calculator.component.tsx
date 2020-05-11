import React, { useState } from 'react';
import { observer, inject } from 'mobx-react'
import CalculatorButton from '../calculator-button/calculator-button.component';
import CalculatorResult from '../calculator-result/calculator-result.component';

import calculatorButtonParse from '../../utils/calculatorButtonParse'
import calculatorOperation from '../../utils/calculatorOperation';

import { Row, CalculatorLayout } from './calculator.styles'

import { data } from './data';

let value1: undefined | number
let value2: undefined | number
let lastButton: undefined | string
let operation: undefined | string

const Calculator: React.FC = (props) => {
  console.log(props.calculatorStore)

  const [operationText, setOperationText] = useState()
  const [result, setResult] = useState()

  const handleClickButton = (label: string): void => {
    const {
      operationText,
      result,
      currentOperation,
      calculateValue1,
      calculateValue2
    } = calculatorOperation(
      label,
      calculatorButtonParse(label),
      value1,
      value2,
      lastButton,
      operation
    )
    lastButton = calculatorButtonParse(label)
    value1 = calculateValue1
    value2 = calculateValue2
    operation = currentOperation
    setOperationText(operationText)
    setResult(result)
    if (result) {
      lastButton = undefined
      value1 = undefined
      value2 = undefined
      operation = undefined
    }
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

export default inject('calculatorStore')(observer(Calculator))
