import React from 'react'
import { shallow } from 'enzyme'

import CalculatorResult from './calculator-result.component'

it('CalculatorResult should render', () => {
  const wrapper = shallow(<CalculatorResult />)
  expect(wrapper.exists()).toBe(true)
})

it('CalculatorResult should render', () => {
  const wrapper = shallow(<div><CalculatorResult /></div>)
  wrapper.setProps({ result: 100 })
  expect(wrapper.props().result).toEqual(100)
})

