import React from 'react';
import CalculatorButton from '../calculator-button/calculator-button.component';

import { Row } from './calculator.styles'

const Calculator: React.FC = () => (
  <>
    <Row>
      <CalculatorButton label='1' />
      <CalculatorButton label='2' />
      <CalculatorButton label='3' />
      <CalculatorButton label='x' />
    </Row>
    <Row>
      <CalculatorButton label='4' />
      <CalculatorButton label='5' />
      <CalculatorButton label='6' />
      <CalculatorButton label='-' />
    </Row>
    <Row>
      <CalculatorButton label='7' />
      <CalculatorButton label='8' />
      <CalculatorButton label='9' />
      <CalculatorButton label='+' />
    </Row>
    <Row>
      <CalculatorButton label='0' />
      <CalculatorButton label='0' />
      <CalculatorButton label='.' />
      <CalculatorButton label='=' />
    </Row>
  </>
)

export default Calculator
