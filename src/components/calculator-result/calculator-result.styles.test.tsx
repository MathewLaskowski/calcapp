import React from 'react'
import { shallow } from 'enzyme'

import { Result } from './calculator-result.styles'


it('Result should render', () => {
  const wrapper = shallow(<Result />)
  expect(wrapper.exists()).toBe(true)
})
