import React from 'react'
import { Button } from './calculator-button.styles'

type CalculatorButtonProps = {
  label: string
  size?: 'big' | 'small'
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ label, size }) => (
  <Button size={size}>{label}</Button>
)

export default CalculatorButton
