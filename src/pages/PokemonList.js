import { useState, useEffect } from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
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
    <div>
      { loading ? 
        <h3>Loading ...</h3> :
        <div className="pokemon-container">
          {
            data.map((val, index) => {
              return (
              <div
                className={ `poke-card ${val.types[0].type.name} mb-2`}
                key={ index }
                onClick={() => goToDetail(val.name)}
              >
                <img src={val.sprites.front_default} alt="pokemon front" />
                <div className="w-60">
                  <div>
                    <h2>
                      { val.name[0].toUpperCase() + val.name.slice(1) }
                    </h2>
                    <p>
                      #{ val.id }
                    </p>
                  </div>
                  
                  <div>
                    {
                      val.types.map((type, index) => {
                        return (
                          <p key={ index } className={ `${type.type.name}` }>
                            { type.type.name[0].toUpperCase() + type.type.name.slice(1) }
                          </p>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              )
            })
          }
        </div>
      }
    </div>
  )
}

export default withRouter(PokemonList);