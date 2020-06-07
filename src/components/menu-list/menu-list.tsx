import React from 'react'
import { Layout, Icon } from './menu-list.styles'

const handleClick = () => {
  console.log('click')
}

const MenuList = () => (
  <Layout>
    <Icon onClick={handleClick}>Calculator</Icon>
    <Icon onClick={handleClick}>Apps</Icon>
  </Layout>
)

export default MenuList
