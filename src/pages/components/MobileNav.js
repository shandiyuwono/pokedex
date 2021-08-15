/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const NavBar = styled.nav`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
  bottom: 0;
  width: inherit;
`

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  background-color: #20A39E;
  color: white;
  &.active {
    color: white;
    box-shadow: inset 0px 0px 2px #0E3E81;
    background-color: #25BBB6;
  }
`


function MobileNav() {
  return (
    <NavBar>
      <StyledLink exact={true} to="/" activeClassName="active">Pokédex</StyledLink>
      <StyledLink to="/my-pokemon-list" activeClassName="active">My Pokémon List</StyledLink>
    </NavBar>  
  )
}

export default MobileNav