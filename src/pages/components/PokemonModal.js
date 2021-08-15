import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CatchLoading from '../../assets/catch_loading.webp'
import { css } from '@emotion/css'
import styled from '@emotion/styled'

const footerContainer = css`
  justify-content: center !important;

  button {
    width: 40%;
  }

  .btn-warning {
    background-color: lightyellow;
    border: 2px solid black;

    &:hover {
      background-color: #FFFFAD;
      border: 2px solid black;
    }
  }
`

const Loader = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;

  img {
    max-width: 100px;
  }
`

function PokemonModal(props) {
  const {
    detail,
    openModal,
    catchSuccess,
    catchLoading,
    catchPokemon,
    setOpenModal
  } = props

  const [ nickname, setNickname ] = useState('')
  const [ error, setError ] = useState(false)

  const pokemonName = detail.name[0].toUpperCase() + detail.name.slice(1)

  const addPokemon = () => {
    const pokemonList = JSON.parse(localStorage.getItem('myPokemonList')) || []

    if (!pokemonList.some(val => val.nickname === nickname)) {
      const newPokemon = {
        ...detail,
        nickname
      }

      pokemonList.push(newPokemon)
      setOpenModal(false)
    }

    else {
      setError(true)
      setNickname('')
    }

    localStorage.setItem('myPokemonList', JSON.stringify(pokemonList))
  }

  return (
    <Modal show={openModal} centered>
      {
        catchLoading ? 
        <Loader>
          <img className="pokeball-loading" src={CatchLoading} alt="pokeball loading"/>
        </Loader> :
        <div>
          <Modal.Body className="text-center">
            <h2 className="mb-4">
              {
                catchSuccess ? `You've successfully caught ${pokemonName}!` : `Woops! ${pokemonName} Escaped!`
              }
            </h2>

            <div>
              
              {
                catchSuccess &&
                <div>
                  <p>What will you name it?</p>
                  <input
                    type="text"
                    className="p-2 w-100"
                    placeholder="Enter Nickname"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                  />
                </div>
              }

              { 
                error &&
                <p className={ `mt-2 ${error ? 'text-danger' : 'text-success'}`}>
                  Pokémon nickname has already been taken, <br/> please enter a new one.
                </p>
              }
            </div>
          </Modal.Body>
          <Modal.Footer className={ footerContainer }>
            <button className="btn btn-secondary p-2" onClick={() => setOpenModal(false)}>
              Take me back
            </button>
            { 
              catchSuccess ?
              <button className="btn btn-success p-2" disabled={!nickname} onClick={() => addPokemon() }>
                Save Pokémon
              </button> :
              <button className="btn btn-warning p-2" onClick={() => catchPokemon()}>
                Try again
              </button>
            }
          </Modal.Footer>
        </div>
      }
    </Modal>
  )
}

export default PokemonModal