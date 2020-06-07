import styled from 'styled-components'

export const Icon = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  min-width: 50px;
  height: 50px;
  background-color: #161E2B;
  cursor: pointer;
  
  &:hover {
    background-color: #6B63FF;
  }
`

export const Layout = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  width: 100%;
  height: 100%;
`
