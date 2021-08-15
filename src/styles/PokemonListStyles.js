/** @jsxImportSource @emotion/react */
import Background from 'assets/pokedex_background.png'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url(${Background});
  background-repeat: repeat-y;
  background-size: cover;
  overflow-x: hidden;
`

const ListContainer = styled.div`
  height: 80%;
  width: 100%;
  overflow: auto;
`

const Card = styled.div`
  background-color: white;
  position: relative;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);

  .sprite-container {
    background-color: rgb(193, 195, 195, 0.5);
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  
    img {
      width: 100px;
      height: 100px;
    }
  }
`
export { Container, ListContainer, Card }