import React, { useState } from 'react';
import { observer, inject } from 'mobx-react'
import CalculatorButton from '../calculator-button/calculator-button.component';
import CalculatorResult from '../calculator-result/calculator-result.component';

import calculatorButtonParse from '../../utils/calculatorButtonParse'
import calculatorOperation from '../../utils/calculatorOperation';

import { Row, CalculatorLayout } from './calculator.styles'

import { data } from './data';

interface CalculatorStore {
  value1: undefined | number
  value2: undefined | number
  lastButton: undefined | string
  operation: undefined | string
  setValue1: (value: undefined | number) => void,
  setValue2: (value: undefined | number) => void,
  setLastButton: (value: undefined | string) => void,
  setOperation: (value: undefined | string) => void
}

interface CalculatorProps {
  calculatorStore?: CalculatorStore
}

const Calculator: React.FC<CalculatorProps> = (props) => {

  let { value1, value2, lastButton, operation, setValue1, setValue2, setLastButton, setOperation } = props.calculatorStore as CalculatorStore

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

    setLastButton(calculatorButtonParse(label))
    setValue1(calculateValue1)
    setValue2(calculateValue2)
    setOperation(currentOperation)

    setOperationText(operationText)
    setResult(result)

    if (result) {
      setLastButton(undefined)
      setValue1(undefined)
      setValue2(undefined)
      setOperation(undefined)
    }
  }

  const renderRows = (): JSX.Element[] => data.map(item => (
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
