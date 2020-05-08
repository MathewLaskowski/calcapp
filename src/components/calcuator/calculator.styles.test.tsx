import React from 'react'
import { isElement } from 'react-dom/test-utils';

import { Row, CalculatorLayout } from './calculator.styles'

it('Row should be React Element', () => {
  expect(isElement(<Row />)).toBe(true)
})

it('CalculatorLayout should be React Element', () => {
  expect(isElement(<CalculatorLayout />)).toBe(true)
})
