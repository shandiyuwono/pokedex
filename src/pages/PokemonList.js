/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import PokemonCard from './components/PokemonCard';
import PokedexLogo from '../assets/pokedex_logo.png'
import PokeballLoading from '../assets/pokeball_loading.gif'
import '../App.scss';

const Loading = styled.img`
  width: 150px;
  height: 150px;
`

function PokemonList() {
  const pokemonContainer = useRef();
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [nextUrl, setNextUrl ] = useState('')
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon'
  
  useEffect(() => {
    getList(apiUrl)
  }, [])

  const getList = (url) => {
    setLoading(true)

    axios.get(url)
      .then((res) => {
        setNextUrl(res.data.next)
        getDetail(res.data.results)
      })
  }

  const getDetail = (results) => {
    Promise.all(results.map(val => axios.get(val.url)))
      .then((res) => {
        const details = res.map((val) => val.data)

        setData(data.concat(details))
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const onScroll = () => {
    if (pokemonContainer.current) {
      const { scrollTop, scrollHeight, clientHeight } = pokemonContainer.current;
      if (scrollTop + clientHeight === scrollHeight) {
        getList(nextUrl)
      }
    }
  }

  return (
    <div className="pokemon-list-container">
      <img
        id="pokedex-logo"
        src={PokedexLogo}  
        alt="pokedex logo"
        className="my-4" 
      />

      <div className="pokemon-container row" onScroll={() => onScroll()} ref={pokemonContainer}>
        {
          data.map((val, index) => {
            return (
              <PokemonCard  data={val} key={index}/>
            )
          })
        }

        {
          loading &&
          <div className="col-12 d-flex justify-content-center">
            <Loading src={PokeballLoading} alt="pokeball-loading" />
          </div>
        }
      </div>
    </div>
  )
}

export default PokemonList;