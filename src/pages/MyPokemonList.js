import { div } from 'prelude-ls'
import { useState } from 'react'
import PokemonCard from './components/PokemonCard'
import ListContainer from 'styles/ListContainer'

function MyPokemonList(props) {
  const [ myPokemonList, setMyPokemonList ] = useState(JSON.parse(localStorage.getItem('myPokemonList')))

  const removePokemon = (e, nickname) => {
    e.stopPropagation()

    const filter = myPokemonList.filter(val => val.nickname !== nickname)

    setMyPokemonList(filter)
    localStorage.setItem('myPokemonList', JSON.stringify(filter))
  }

  return (
    <div >
      <h1 className="text-white fw-bold text-center py-4">
        MY POKÉMON LIST
      </h1>
      {
        myPokemonList?.length ?
          <ListContainer>
            {
              myPokemonList.map((val, index) => (
                <PokemonCard data={val} removePokemon={removePokemon} key={index} />
              ))
            }
          </ListContainer> :
          <h4>You have not caught any Pokémons.</h4>
      }
      
    </div>
  )
}

export default MyPokemonList