import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PokemonModal from './components/PokemonModal'
import Types from 'pages/components/Types'

const DetailContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  color: white;

  img {
    max-width: 150px;
  }
`

const MovesContainer = styled.div`
  color: white;
  background-color: rgb(32, 163, 158, 0.9);

  h4 {
    text-align: center;
    background-color: #146663;
    padding: 10px;
    margin: 0;
  }

  .content {
    height: 50vh;
    overflow: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: none;
  
    & > div {
      margin: 10px;
      
      p {
        padding: 5px;
        text-align: center;
        border-radius: 5px;
        background: #092327;
      }
    }
  }
`

const CatchButton = styled.button`
  margin-top: 2rem;
  width: 80%;
  font-weight: bold;
  padding: 10px;
  background-color: lightyellow;
  border-radius: 10px;

  &:hover {
    background-color: #FFFFAD;
  }
`

function PokemonDetail(props) {
  const [ detail, setDetail ] = useState({})
  const [ loading, setLoading ] = useState(true)
  const [ catchLoading, setCatchLoading ] = useState(true)
  const [ catchSuccess, setCatchSuccess ] = useState(false)
  const [ openModal, setOpenModal ] = useState(false)

  const { name } = useParams()

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
    setOpenModal(true)
    setCatchLoading(true)

    const timer = () =>
      setTimeout(() => {
        setCatchSuccess(Math.random() < 0.5)

        setCatchLoading(false)
      }, 700)

    const timerId = timer()

    return () => {
      clearTimeout(timerId);
    };
  }

  return (
    <div className="">
      {
        loading ?
          <div>Loading ...</div> : 
          <div>
            <DetailContainer>
              <div>
                <h2>
                  { detail.name[0].toUpperCase() + detail.name.slice(1) }
                </h2>

                <div className="mb-3">
                  <span className="me-3">
                    Height: { detail.height / 10}m
                  </span>
                  <span>
                    Weight: { detail.weight / 10}kg
                  </span>
                </div>

                <Types data={detail.types} />
              </div>
              <img
                src={ detail.sprites.front_default }
                alt="pokemon-detail"
              />
            </DetailContainer>

            <MovesContainer>
              <h4>
                Move List  
              </h4>
              <div className="content">
                {
                  detail.moves.map((val, index) => (
                    <div key={index}>
                      <p>
                        { val.move.name }
                      </p>
                    </div>
                  ))
                }
              </div>
            </MovesContainer>

            <div className="d-flex justify-content-center">
              <CatchButton onClick={() => catchPokemon()}> 
                CATCH POKÉMON
              </CatchButton>
            </div>

            <PokemonModal
              openModal={openModal}
              catchLoading={catchLoading}
              detail={detail}
              catchSuccess={catchSuccess}
              catchPokemon={catchPokemon}
              setOpenModal={setOpenModal}
            /> 
        </div>
      }
    </div>
  )
}

export default PokemonDetail