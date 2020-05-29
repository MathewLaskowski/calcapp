import React from 'react'
import { Layout, Icon } from './menu-list.styles'

const MenuList = () => (
  <Layout>
    <div>
      <Icon>Calculator</Icon>
      <Icon>Apps</Icon>
    </div>
    <div>
      <Icon>Tools</Icon>
      <Icon>Notes</Icon>
    </div>
  </Layout>
)

export default MenuList
