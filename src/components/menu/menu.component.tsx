import React from 'react'
import { MenuContainer, Title, SubTitle } from './menu.styles'
import MenuList from '../menu-list/menu-list'

const Menu = () => (
  <MenuContainer>
    <Title>Calculated</Title>
    <SubTitle>Select your calculator</SubTitle>
    <MenuList />
  </MenuContainer>
)

export default Menu
