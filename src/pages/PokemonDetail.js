import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import PokemonModal from './components/PokemonModal'
import { Modal } from 'react-bootstrap'

function PokemonDetail(props) {
  const [ detail, setDetail ] = useState({})
  const [ loading, setLoading ] = useState(true)
  const [ catchLoading, setCatchLoading ] = useState(true)
  const [ catchSuccess, setCatchSuccess ] = useState(false)
  const [ openModal, setOpenModal ] = useState(false)

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
    <div>
      {
        loading ?
          <div>Loading ...</div> : 
          <div className="text-center">
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
                  <div className="col-4" key={index}>
                    <p>
                      { val.move.name }
                    </p>
                  </div>
                ))
              }
            </div>

            <button className="btn btn-primary mt-5 px-5"
              onClick={() => catchPokemon()}
            >
              CATCH
            </button>

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