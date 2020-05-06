import React from 'react'
import { create } from 'react-test-renderer'
import { isElement } from 'react-dom/test-utils';

import CalculatorButton from './calculator-button.component';

it('CalculatorButton should render', () => {
  expect(isElement(
      <CalculatorButton
        label='test'
        handleClick={() => {}}
      />))
    .toBe(true)
})

it('CalculatorButton should have required props', () => {
  const mockHandleClick = () => {}
  const testRender = create(
    <CalculatorButton
      label='test'
      handleClick={mockHandleClick}
      bold={true}
      size='big'
    />)
  expect(testRender.root.props.label).toBe('test')
  expect(testRender.root.props.handleClick).toBe(mockHandleClick)
})
