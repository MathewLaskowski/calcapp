import React from 'react';
import Menu from '../menu/menu.component'
import Calculator from '../calcuator/calculator.component';
import { LayoutContainer } from './layout.styles'

const Layout: React.FC = () => (
  <LayoutContainer>
    <Menu active='Calculator' />
    <Calculator />
  </LayoutContainer>
)

export default Layout
