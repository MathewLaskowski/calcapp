import React from 'react'
import TestRender from 'react-test-renderer'
import { isElement } from 'react-dom/test-utils';

import { Button } from './calculator-button.styles'

it('Button should render', () => {
  expect(isElement(<Button />)).toBe(true)
})

it('Button should have props size', () => {
  const testRender = TestRender.create(<Button size='big' />)
  expect(testRender.root.props.size).toBe('big')
})

it('Button should have props bold', () => {
  const testRender = TestRender.create(<Button bold={true} />)
  expect(testRender.root.props.bold).toBe(true)
})
