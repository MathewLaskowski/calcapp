import React, { useState } from 'react';
import CalculatorButton from '../calculator-button/calculator-button.component';
import CalculatorResult from '../calculator-result/calculator-result.component';

import calculatorButtonParse from '../../utils/calculatorButtonParse'

import { Row, CalculatorLayout } from './calculator.styles'

import { data } from './data';

let value1: undefined | number
let value2: undefined | number
let lastButton: undefined | string
let operation: undefined | string

const Calculator: React.FC = () => {

  const [operationText, setOperationText] = useState()

  const handleClickButton = (label: string): void => {

    const parseButton: string = calculatorButtonParse(label)

    if (parseButton === 'value') {
      if (!value1 && !value2) {
        value1 = parseInt(label)
        setOperationText(value1)
      } else if (value1 && !value2 && lastButton !== 'operation') {
        value1 = parseInt(value1 + label)
        setOperationText(value1)
      } else if (!value2 && value1 && lastButton === 'operation') {
        value2 = parseInt(label)
        setOperationText(`${operationText} ${value2}`)
      } else if (value2 && value1) {
        value2 = parseInt(value2 + label)
        setOperationText(`${operationText}${label}`)
      }
    }

    lastButton = parseButton

    if (parseButton === 'operation') {
      if (!operation) {
        operation = label
        setOperationText(`${operationText} ${operation}`)
      } else if (operation && value1 && value2 && label === '=') {
        if (operation === '+') {
          console.log(value1 + value2)
          setOperationText(`${operationText} ${label} ${value1 + value2}`)
          value1 = undefined
          value2 = undefined
          lastButton = undefined
          operation = undefined
        } else if (operation === '-') {
          console.log(value1 - value2)
          setOperationText(`${operationText} ${label} ${value1 + value2}`)
          value1 = undefined
          value2 = undefined
          lastButton = undefined
          operation = undefined
        }
      }
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
      <CalculatorResult />
      {renderRows()}
      <div style={{ fontSize: '2rem', color: 'white' }}>{operationText}</div>
    </CalculatorLayout>
  )
}

export default Calculator
