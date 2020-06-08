import React, { useState } from 'react'
import { Layout, Icon } from './menu-list.styles'

type handleClickType = (item: string) => void

const menuListItems = ['Calculator', 'Apps']

const MenuList = () => {

  const [activeItem, setActiveItem] = useState()

  const handleClick: handleClickType = item => {
    setActiveItem(item)
    console.log(item)
  }

  return (
    <Layout>
      {menuListItems.map(el => (
        <Icon
          key={el}
          onClick={() => handleClick(el)}
          active={el === activeItem}
        >
          {el}
        </Icon>
      ))}
    </Layout>
  )
}
export default MenuList
