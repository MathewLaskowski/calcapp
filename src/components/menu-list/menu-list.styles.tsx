import styled from 'styled-components'

type IconType = {
  active?: boolean
}

export const Icon = styled.div<IconType>`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 50px;
  background-color: ${({ active }) => active ? '#6B63FF' : '#161E2B'};
  cursor: pointer;
`

export const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  width: 100%;
  height: 100%;
`
