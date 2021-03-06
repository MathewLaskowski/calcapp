import React, { useState } from 'react'
import { Layout, Icon } from './menu-list.styles'
import { observer, inject } from 'mobx-react';

type handleClickType = (item: string) => void

const menuListItems = ['Calculator', 'Apps']

interface MenuList {
  active: 'Calculator' | 'Apps'
}

const MenuList: React.FC<MenuList> = ({ active }) => {

  const [activeItem, setActiveItem] = useState<string>(active)

  const handleClick: handleClickType = item => {
    setActiveItem(item)
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
export default inject('uiStore')(observer(MenuList))
