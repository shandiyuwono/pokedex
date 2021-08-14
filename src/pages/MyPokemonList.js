import { div } from 'prelude-ls'
import { useState } from 'react'
import PokemonCard from './components/PokemonCard'

function MyPokemonList(props) {
  const [ myPokemonList, setMyPokemonList ] = useState(JSON.parse(localStorage.getItem('myPokemonList')))

  const removePokemon = (nickname) => {
    const filter = myPokemonList.filter(val => val.nickname !== nickname)

    setMyPokemonList(filter)
    localStorage.setItem('myPokemonList', JSON.stringify(filter))
  }

  return (
    <div className="pokemon-list-container">
      <h2 className="my-4">My Pokemon List</h2>
      {
        myPokemonList ? 
          myPokemonList.map((val, index) => (
            <PokemonCard data={val} removePokemon={removePokemon} key={index} />
          )) :
        <div>You have no pokemons</div>
      }
      
    </div>
  )
}

export default MyPokemonList