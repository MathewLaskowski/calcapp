import React from 'react';
import CalculatorButton from '../calculator-button/calculator-button.component';
import CalculatorResult from '../calculator-result/calculator-result.component';

import calculatorButtonParse from '../../utils/calculatorButtonParse'

import { Row, CalculatorLayout } from './calculator.styles'

import { data } from './data';

const handleClickButton = (label: string): void => {
  console.log(calculatorButtonParse(label))
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

const Calculator: React.FC = () => (
  <CalculatorLayout>
    <CalculatorResult />
    {renderRows()}
  </CalculatorLayout>
)

export default Calculator
