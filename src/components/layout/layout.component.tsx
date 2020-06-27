import React from 'react';
import Menu from '../menu/menu.component'
import Calculator from '../calcuator/calculator.component';
import { inject, observer } from 'mobx-react';
import { LayoutContainer } from './layout.styles'

const Layout: React.FC = (props) => {
  console.log(props)
  return (
  <LayoutContainer>
    <Menu active='Calculator' />
    <Calculator />
  </LayoutContainer>
)}

export default inject('uiStore')(observer(Layout))
