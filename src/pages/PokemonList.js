import { useState, useEffect } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import PokemonCard from './components/PokemonCard';
import PokedexLogo from '../assets/pokedex_logo.png'
import '../App.scss';

function PokemonList(props) {
  const {
    history
  } = props

  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon'
  
  useEffect(() => {
    setLoading(true)

    axios.get(apiUrl)
      .then((res) => {
        console.log(res)
        getDetail(res.data.results)
      })
  }, [])

  const getDetail = (data) => {
    Promise.all(data.map(val => axios.get(val.url)))
      .then((res) => {
        const data = res.map((val) => val.data)
        setData(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const goToDetail = (name) => {
    history.push(`/detail/${name}`, {
      state: {
        name
      }
    })
  }

  return (
    <div className="pokemon-list-container">
      <img
        id="pokedex-logo"
        src={PokedexLogo}  
        alt="pokedex logo"
        className="my-4" 
      />

      { loading ? 
        <h3>Loading ...</h3> :
        <div className="pokemon-container">
          {
            data.map((val, index) => {
              return (
                <PokemonCard data={val} key={index}/>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default withRouter(PokemonList);