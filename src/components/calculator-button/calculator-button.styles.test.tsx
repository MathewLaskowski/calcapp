import React from 'react'
import { act, create } from 'react-test-renderer'
import { isElement } from 'react-dom/test-utils';

import { Button } from './calculator-button.styles'

it('Button should render', () => {
  expect(isElement(<Button />)).toBe(true)
})

it('Button should have props size', () => {
  const testRender = create(<Button />)
  expect(testRender.root.props.size).toBe(undefined)
  act(() => {
    testRender.update(<Button size='big' />)
  })
  expect(testRender.root.props.size).toBe('big')
})

it('Button should have props bold', () => {
  const testRender = create(<Button />)
  expect(testRender.root.props.bold).toBe(undefined)
  act(() => {
    testRender.update(<Button bold={true} />)
  })
  expect(testRender.root.props.bold).toBe(true)
})
