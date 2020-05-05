import React from 'react'
import { shallow } from 'enzyme'

import CalculatorResult from './calculator-result.component'

it('CalculatorResult should render', () => {
  const wrapper = shallow(<CalculatorResult />)
  expect(wrapper.exists()).toBe(true)
})

