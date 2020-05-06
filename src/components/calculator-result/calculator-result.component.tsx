import React from 'react'
import { Result } from './calculator-result.styles';

type CalculatorResultProps = {
  result?: number
}

const CalculatorResult: React.FC<CalculatorResultProps> = ({ result }) => <Result>{result}</Result>

export default CalculatorResult
