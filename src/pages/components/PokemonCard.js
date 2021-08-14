import { withRouter } from 'react-router-dom'
import ArrowRight from '../../assets/right_arrow.png'

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
    <div className={ `poke-card ${data.types[0].type.name} mb-4`}>
      <img className="sprite" src={data.sprites.front_default} alt="pokemon front" />
      <div className="w-100">
        <div className="py-2 px-3">
          <div className="d-flex justify-content-between">
            <div>
              <h2>
                { data.name[0].toUpperCase() + data.name.slice(1) }
              </h2>
              { 
                data.nickname &&
                <h4> { data.nickname } </h4>
              }
            </div>
            <p>
              #{ data.id }
            </p>
          </div>
          
          <div className="tags">
            {
              data.types.map((type, index) => (
                <p key={ index } className={ `${type.type.name}` }>
                  { type.type.name[0].toUpperCase() + type.type.name.slice(1) }
                </p>
              ))
            }
          </div>
        </div>

        <div className="d-flex justify-content-end">
          {
            data.nickname &&
            <button onClick={() => removePokemon(data.nickname)}>
              Remove
            </button>
          }
          <button onClick={() => goToDetail(data.name)}>
            <span>
              See Details
            </span>
            <img src={ArrowRight} alt="detail" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default withRouter(PokemonCard)