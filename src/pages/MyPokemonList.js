import { div } from 'prelude-ls'
import { useState } from 'react'
import PokemonCard from './components/PokemonCard'

function MyPokemonList(props) {
  const [ myPokemonList ] = useState(JSON.parse(localStorage.getItem('myPokemonList')))

  return (
    <div>
      {
        myPokemonList.map((val, index) => (
          <PokemonCard data={val} key={index} />
        ))
      }
    </div>
  )
}

export default MyPokemonList