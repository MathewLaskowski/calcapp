import React from 'react'
import { shallow } from 'enzyme'
import TestRenderer from 'react-test-renderer';

import CalculatorResult from './calculator-result.component'

it('CalculatorResult should render', () => {
  const wrapper = shallow(<CalculatorResult />)
  expect(wrapper.exists()).toBe(true)
})

it('CalculatorResult should have result prop Enzyme', () => {
  const wrapper = shallow(<div><CalculatorResult /></div>)
  wrapper.setProps({ result: 100 })
  expect(wrapper.props().result).toEqual(100)
})

it('CalculatorResult should have result prop testRender', () => {
  const testRenderer = TestRenderer.create(<CalculatorResult result={100} />);
  expect(testRenderer.root.props.result).toBe(100)
})

