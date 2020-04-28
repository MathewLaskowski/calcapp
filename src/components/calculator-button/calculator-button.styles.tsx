import styled from 'styled-components';

type ButtonProps = {
  size?: string,
  bold?: boolean
}

export const Button = styled.div<ButtonProps>`
  background-color: #354358;
  color: #D4D5D7;
  width: ${({size}) => size === 'big' ? '124px' : '55px'};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 7px;
  font-weight: ${({bold}) => bold ? 'bold' : 'regular'};
  cursor: pointer;
`
