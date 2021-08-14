import { withRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'

function PokemonCard(props) {
  const {
    data,
    history,
    removePokemon
  } = props

  const goToDetail = (name) => {
    history.push(`/detail/${name}`, {
      state: {
        name
      }
    })
  }

  return (
    <div className={ `poke-card ${data.types[0].type.name} mb-2`}>
      <img src={data.sprites.front_default} alt="pokemon front" />
      <div className="w-60">
        <div>
          <h2>
            { data.name[0].toUpperCase() + data.name.slice(1) }
          </h2>
          { 
            data.nickname &&
            <h4> { data.nickname } </h4>
          }
          <p>
            #{ data.id }
          </p>
        </div>
        
        <div>
          {
            data.types.map((type, index) => (
              <p key={ index } className={ `${type.type.name}` }>
                { type.type.name[0].toUpperCase() + type.type.name.slice(1) }
              </p>
            ))
          }
        </div>

        <button onClick={() => goToDetail(data.name)}>
          See Details
        </button>

        {
          data.nickname &&
          <button onClick={() => removePokemon(data.nickname)}>
            Remove
          </button>
        }
      </div>
    </div>
  )
}

export default withRouter(PokemonCard)