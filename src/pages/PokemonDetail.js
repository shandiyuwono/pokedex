import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function PokemonDetail(props) {
  const [ detail, setDetail ] = useState({})
  const [ loading, setLoading ] = useState(true)

  const {
    name
  } = useParams()

  const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

  useEffect(() => {
    axios.get(`${apiUrl}/${name}`)
      .then((res) => {
        setDetail(res.data)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  const catchPokemon = () => {
    const timer = () => setTimeout(() => {
      console.log('RANDOM', Math.random() < 0.5)
    }, 1000)

    const timerId = timer()

    return () => {
      clearTimeout(timerId);
    };
  }

  return (
    <div>
      {
        loading ?
          <div>Loading ...</div> : 
          <div class="text-center">
            <h1>
              { detail.name[0].toUpperCase() + detail.name.slice(1) }
            </h1>
            <img
              src={ detail.sprites.front_default }
              alt="pokemon-detail"
            />

            <div className="move-container row">
              {
                detail.moves.map((val, index) => (
                  <div className="col-6" key={index}>
                    <p>
                      { val.move.name }
                    </p>
                  </div>
                ))
              }
            </div>

            <button class="btn btn-primary mt-5 px-5" onClick={() => catchPokemon()}>
              CATCH
            </button>
          </div>
      }
    </div>
  )
}

export default PokemonDetail