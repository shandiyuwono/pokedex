/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'
import { Card } from 'styles/PokemonListStyles'

const Remove = styled.button`
  position: absolute;
  background: red;
  color: white;
  right: 10px;
  bottom: 0;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
`

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
    <Card
      className={ `${data.types[0].type.name} mb-4`}
      onClick={() => goToDetail(data.name)}
    >
      <div className="sprite-container">
        <img className="sprite" src={data.sprites.front_default} alt="pokemon front" />
      </div>
      <div className="w-100">
        <div className="py-2 px-3">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2>
                { data.name[0].toUpperCase() + data.name.slice(1) }
              </h2>
              {/* { 
                data.nickname &&
                <h4> { data.nickname } </h4>
              } */}
            </div>
            <p>
              #{ data.id }
            </p>
          </div>
          
          <div className="tags">
            {
              data.types.map((type, index) => (
                <p key={ index } className={ `${type.type.name} me-3` }>
                  { type.type.name[0].toUpperCase() + type.type.name.slice(1) }
                </p>
              ))
            }
          </div>
        </div>

        {/* {
            data.nickname &&
            <Remove onClick={() => removePokemon(data.nickname)}>
              Remove
            </Remove>
          } */}
      </div>
    </ Card>
  )
}

export default withRouter(PokemonCard)