import React from 'react'
import { Layout, Icon } from './menu-list.styles'

const handleClick = () => {
  console.log('click')
}

const menuListItems = ['Calculator', 'Apps']

const MenuList = () => (
  <Layout>
    {menuListItems.map(el => (
      <Icon key={el} onClick={handleClick}>{el}</Icon>
    ))}
  </Layout>
)

export default MenuList
