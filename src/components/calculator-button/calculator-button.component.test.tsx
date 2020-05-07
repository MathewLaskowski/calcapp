import React from 'react'
import { create } from 'react-test-renderer'
import { act, isElement } from 'react-dom/test-utils';

import CalculatorButton from './calculator-button.component';

import { render, unmountComponentAtNode } from "react-dom";


let container: Element | null = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});


it('CalculatorButton should render', () => {
  expect(isElement(
      <CalculatorButton
        label='test'
        handleClick={() => {}}
      />))
    .toBe(true)
})

it('CalculatorButton should have required props', () => {
  const mockHandleClick = jest.fn()
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

it('onClick on Button should be called', () => {
  const onClick = jest.fn(label => label)
  act(() => {
    render(
      <CalculatorButton
        label='test'
        handleClick={onClick}
        bold={true}
        size='big'
      />, container);
  });

  const component = document.querySelector('div')

  act(() => {
    if (component) {
      component.querySelector('div')?.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    }
  })

  expect(onClick).toHaveBeenCalledTimes(1);
  expect(onClick).toReturnWith('test');
})
