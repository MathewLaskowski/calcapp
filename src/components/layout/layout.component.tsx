import React from 'react';
import Menu from '../menu/menu.component'
import Calculator from '../calcuator/calculator.component';
import { inject, observer } from 'mobx-react';
import { LayoutContainer } from './layout.styles'
import { UIStoreType } from '../../stores/UIStore'

interface LayoutProps {
  uiStore?: UIStoreType
}

const Layout: React.FC<LayoutProps> = ({ uiStore }) => {
  let activeMenu: undefined | string
  if (uiStore) {
    activeMenu = uiStore.selectedMenuText
  }
  return (
  <LayoutContainer>
    <Menu active='Calculator' />
    {activeMenu === 'Calculator' && <Calculator />}
  </LayoutContainer>
)}

export default inject('uiStore')(observer(Layout))
