import React from 'react'
import { Button } from './calculator-button.styles'

type CalculatorButtonProps = {
  label: string
  size?: 'big' | 'small',
  bold?: boolean,
  handleClick(label: string): void
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ label, size, bold, handleClick }) => (
  <Button onClick={() => handleClick(label)} size={size} bold={bold}>{label}</Button>
)

export default CalculatorButton
