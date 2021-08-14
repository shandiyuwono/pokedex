import { useState } from 'react'

function PokemonModal(props) {
  const {
    detail,
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
    <div className="modal-background">
      <div className="modal-container">

        {
          catchLoading ? 
          <div>Loading...</div> :
          <div>
            <h2 className="title">
              {
                catchSuccess ? 'You\'ve successfully caught the Pokemon!' : 'Woops! The Pokemon Escaped!'
              }
            </h2>
            <div className="body">
              {
                catchSuccess &&
                <input
                  type="text"
                  placeholder="Enter Nickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              }

              { 
                error &&
                <p>
                  Pokemon nickname has already been taken, please enter a new one.
                </p>
              }

              

              <div className="d-flex">
                <button onClick={() => setOpenModal(false)}>
                  Take me back
                </button>
                {
                  catchSuccess ?
                  <button onClick={() => addPokemon() }>
                    Save Pokemon
                  </button> :
                  <button onClick={() => catchPokemon()}>
                    Try again
                  </button>
                }
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default PokemonModal