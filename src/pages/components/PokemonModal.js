import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import PokeballLoading from '../../assets/pokeball_loading.webp'

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

  const addPokemon = () => {
    const pokemonList = JSON.parse(localStorage.getItem('myPokemonList')) || []

    if (!pokemonList.some(val => val.nickname === nickname)) {
      const newPokemon = {
        ...detail,
        nickname
      }

      pokemonList.push(newPokemon)
    }

    else {
      setError(true)
      setNickname('')
    }

    console.log('POKEMON LIST', pokemonList)

    localStorage.setItem('myPokemonList', JSON.stringify(pokemonList))
  }

  return (
    <Modal show={openModal} centered>
      {
        catchLoading ? 
        <img className="pokeball-loading" src={PokeballLoading} alt="pokeball loading"/> :
        <div>
          <Modal.Body className="text-center">
            
            <h2 className="mb-4">
              {
                catchSuccess ? 'You\'ve successfully caught the Pokemon!' : 'Woops! The Pokemon Escaped!'
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
                <p>
                  Pokemon nickname has already been taken, please enter a new one.
                </p>
              }
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn btn-secondary" onClick={() => setOpenModal(false)}>
              Take me back
            </button>
            { 
              catchSuccess ?
              <button className="btn btn-success" disabled={!nickname} onClick={() => addPokemon() }>
                Save Pokemon
              </button> :
              <button className="btn btn-warning" onClick={() => catchPokemon()}>
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