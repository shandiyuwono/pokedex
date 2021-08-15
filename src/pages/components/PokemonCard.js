import styled from '@emotion/styled'
import { withRouter } from 'react-router-dom'
import Types from 'pages/components/Types'

const Remove = styled.button`
  position: absolute;
  background: red;
  color: white;
  right: 0;
  bottom: 0;
  border-radius: 5px;
  border: none;
  padding: 5px 10px;
`

const Card = styled.div`
  background-color: white;
  position: relative;
  border-radius: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: box-shadow ease-in 0.2s;

  .sprite-container {
    background-color: rgb(193, 195, 195, 0.5);
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
  
    img {
      width: 100px;
      height: 100px;
    }

    span {
      font-size: 2rem;
    }
  }

  &:hover {
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2), 0 3px 5px rgba(0, 0, 0, 0.2);
  }
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
    <div className="p-2">
      <Card
        className={ `${data.types[0].type.name} mb-4 col-12`}
        onClick={() => goToDetail(data.name)}
      >
        <div className="sprite-container">
          <img className="sprite" src={data.sprites.front_default} alt="pokemon front" />
        </div>
        <div className="w-100">
          <div className="py-2 px-3">
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <h3 className="me-3">
                  { data.name[0].toUpperCase() + data.name.slice(1) }
                </h3>
                { 
                  data.nickname &&
                  <span>[ { data.nickname } ]</span>
                }
              </div>
              <p>
                #{ data.id }
              </p>
            </div>
            
            <Types data={data.types} />
          </div>

          {
              data.nickname &&
              <Remove onClick={(e) => removePokemon(e, data.nickname)}>
                Remove
              </Remove>
            }
        </div>
      </ Card>
    </div>
  )
}

export default withRouter(PokemonCard)