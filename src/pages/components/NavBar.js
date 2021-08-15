/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Nav = styled.nav`
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
  color: white !important;

  &.active {
    box-shadow: inset 0px 0px 2px #0E3E81;
    background-color: #25BBB6;
  }
`


function NavBar() {
  return (
    <Nav>
      <StyledLink exact={true} to="/pokedex" activeClassName="active">Pokédex</StyledLink>
      <StyledLink to="/pokedex/my-pokemon-list" activeClassName="active">My Pokémon List</StyledLink>
    </Nav>  
  )
}

export default NavBar