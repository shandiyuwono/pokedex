/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const style = {
  mobileNav: css`
    position: fixed;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    bottom: 0;
    width: 100%;
  `
}

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  background-color: #2D7BE8;
  color: white;
  &.active {
    color: white;
    box-shadow: inset 0px 0px 2px #0E3E81;
    background-color: #478BEB;
  }
`


function MobileNav() {
  return (
    <nav css={style.mobileNav}>
      <StyledLink exact={true} to="/" activeClassName="active">Pokédex</StyledLink>
      <StyledLink to="/my-pokemon-list" activeClassName="active">My Pokémon List</StyledLink>
    </nav>  
  )
}

export default MobileNav