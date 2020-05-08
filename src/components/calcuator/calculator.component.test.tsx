import React from 'react'
import { isElement } from 'react-dom/test-utils';

import Calculator from './calculator.component';

it('Calculator should be React Element', () => {
  expect(isElement(<Calculator />)).toBe(true)
})
