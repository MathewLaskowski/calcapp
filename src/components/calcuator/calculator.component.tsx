import React from 'react';
import CalculatorButton from '../calculator-button/calculator-button.component';

import { Row } from './calculator.styles'

import { data } from './data';

const renderRows = () => data.map(item => (
  <Row>
    {item.map(
      (element: {label: string, size?: 'big' | 'small' }) => <CalculatorButton {...element} />
    )}
  </Row>
))

const Calculator: React.FC = () => (
  <>
    {renderRows()}
  </>
)

export default Calculator
