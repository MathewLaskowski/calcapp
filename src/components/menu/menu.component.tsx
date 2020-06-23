import React from 'react'
import { MenuContainer, Title, SubTitle } from './menu.styles'
import MenuList from '../menu-list/menu-list'

interface MenuProps {
  active: 'Calculator' | 'Apps'
}

const Menu: React.FC<MenuProps> = ({ active }) => (
  <MenuContainer>
    <Title>Calculated</Title>
    <SubTitle>Select your calculator</SubTitle>
    <MenuList active={active} />
  </MenuContainer>
)

export default Menu
