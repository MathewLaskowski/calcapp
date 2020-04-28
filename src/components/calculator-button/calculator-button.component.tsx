import React from 'react'
import { Button } from './calculator-button.styles'

type CalculatorButtonProps = {
  label: string
  size?: 'big' | 'small',
  bold?: boolean
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ label, size, bold }) => (
  <Button size={size} bold={bold}>{label}</Button>
)

export default CalculatorButton
