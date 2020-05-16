import React, { ReactElement } from 'react'
import { Button } from './calculator-button.styles'

type CalculatorButtonProps = {
  label: string
  size?: 'big' | 'small',
  bold?: boolean,
  active?: boolean,
  handleClick(label: string): void
}

const CalculatorButton: React.FC<CalculatorButtonProps> = (props): ReactElement => (
  <Button
    onClick={() => props.handleClick(props.label)}
    size={props.size}
    bold={props.bold}
    active={props.active}
  >
    {props.label}
  </Button>
)

export default CalculatorButton
