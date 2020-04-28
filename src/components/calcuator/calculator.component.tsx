import React from 'react';
import CalculatorButton from '../calculator-button/calculator-button.component';
import CalculatorResult from '../calculator-result/calculator-result.component';

import { Row, CalculatorLayout } from './calculator.styles'

import { data } from './data';

const renderRows = () => data.map(item => (
  <Row key={JSON.stringify(item)}>
    {item.map(
      (element: {label: string, size?: 'big' | 'small' }) => <CalculatorButton {...element} key={element.label} />
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
