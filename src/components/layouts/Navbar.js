import React from 'react'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <StyledNavbar>
      <StyledNavList>
        <StyledNavItem>Conta digital</StyledNavItem>
        <StyledNavItem>Crédito</StyledNavItem>
        <StyledNavItem>Investimentos</StyledNavItem>
        <StyledNavItem>IDTVM</StyledNavItem>
        <StyledNavItem>Seguros</StyledNavItem>
        <StyledNavItem>Recarga de celular</StyledNavItem>
        <StyledNavItem>Sua segurança</StyledNavItem>
      </StyledNavList>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.aside`
  background: ${props => props.theme.primary};
  color: ${props => props.theme.color};
`

const StyledNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`

const StyledNavItem = styled.li`
  display: inline-block;
  padding: 10px;

  &:hover {
    cursor: pointer;
    background: ${props => props.theme.orangeHover};
  }
`

export default Navbar
