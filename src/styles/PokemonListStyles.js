/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
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

  .tags {
    display: flex;
    text-align: center;
    
    p {
      width: 80px;
      color: white;
      padding: 2px 0;
      border-radius: 5px;
    }

    .normal {
      background-color: rgba(168, 168, 120, 1);
    }

    .fire {
      background-color: rgba(240, 128, 48, 1);
    }

    .water {
      background-color: rgba(104, 144, 240, 1);
    }

    .grass {
      background-color: rgba(120, 200, 80, 1);
    }

    .electric {
      background-color: rgba(248, 208, 48, 1);
    }

    .ice {
      background-color: rgba(152, 216, 216, 1)
    }

    .fighting {
      background-color: rgba(192, 48, 40, 1)
    }

    .poison {
      background-color: rgba(160, 64, 160, 1)
    }

    .ground {
      background-color: rgba(225, 192, 104, 1)
    }

    .flying {
      background-color: rgba(168, 144, 240, 1)
    }

    .psychic {
      background-color: rgba(248, 88, 136, 1)
    }

    .bug {
      background-color: rgba(168, 184, 32, 1)
    }

    .rock {
      background-color: rgba(184, 160, 56, 1)
    }

    .ghost {
      background-color: rgba(112, 88, 152, 1)
    }

    .dark {
      background-color: rgba(112, 88, 72, 1);
    }

    .dragon {
      background-color: rgba(112, 56, 248, 1);
    }

    .steel {
      background-color: rgba(184, 184, 208, 1)
    }

    .fairy {
      background-color: rgba(240, 182, 188, 1)
    }
  }
`

export { Container, ListContainer, Card }