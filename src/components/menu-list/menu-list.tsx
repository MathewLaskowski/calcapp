import React, { useState } from 'react'
import { Layout, Icon } from './menu-list.styles'

type handleClickType = (item: string) => void

const handleClick: handleClickType = item => {
  console.log(item)
}

const menuListItems = ['Calculator', 'Apps']

const MenuList = () => (
  <Layout>
    {menuListItems.map(el => (
      <Icon key={el} onClick={() => handleClick(el)}>{el}</Icon>
    ))}
  </Layout>
)

export default MenuList
