import React from 'react'
import { Button } from './calculator-button.styles'

type CalculatorButtonProps = {
  label: string
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ label }) => (
  <Button>{label}</Button>
)

export default CalculatorButton
