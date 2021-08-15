import { div } from 'prelude-ls'
import { useState } from 'react'
import PokemonCard from './components/PokemonCard'
import { Container, ListContainer } from 'styles/PokemonListStyles'

function MyPokemonList(props) {
  const [ myPokemonList, setMyPokemonList ] = useState(JSON.parse(localStorage.getItem('myPokemonList')))

  const removePokemon = (e, nickname) => {
    e.stopPropagation()

    const filter = myPokemonList.filter(val => val.nickname !== nickname)

    setMyPokemonList(filter)
    localStorage.setItem('myPokemonList', JSON.stringify(filter))
  }

  return (
    <Container>
      <h2 className="my-4">My Pokemon List</h2>
      {
        myPokemonList ?
        <ListContainer>
          {
            myPokemonList.map((val, index) => (
              <PokemonCard data={val} removePokemon={removePokemon} key={index} />
            ))
          }
        </ListContainer>
          :
        <div>You have no pokemons</div>
      }
      
    </Container>
  )
}

export default MyPokemonList