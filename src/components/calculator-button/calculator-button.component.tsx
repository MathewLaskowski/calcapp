import React, { ReactElement } from 'react'
import { observer, inject } from 'mobx-react'
import {CalculatorStoreType} from '../../stores/ClipboardStore';

import { Button } from './calculator-button.styles'

interface CalculatorButtonProps {
  label: string
  size?: 'big' | 'small',
  bold?: boolean,
  active?: boolean,
  handleClick(label: string): void,
  calculatorStore?: CalculatorStoreType
}

const CalculatorButton: React.FC<CalculatorButtonProps> = (props): ReactElement => (
  <Button
    onClick={() => props.handleClick(props.label)}
    size={props.size}
    bold={props.bold}
    active={props.calculatorStore ? props.calculatorStore.lastButton === props.label : false}
  >
    {props.label}
  </Button>
)

export default inject('calculatorStore')(observer(CalculatorButton))
