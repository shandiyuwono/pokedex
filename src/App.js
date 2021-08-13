import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.scss';

function App() {
  const [ data, setData ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon'
  
  useEffect(() => {
    setLoading(true)

    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((res) => {
        getDetail(res.data.results)
      })
  }, [])

  const getDetail = (data) => {
    Promise.all(data.map(val => axios.get(val.url)))
      .then((res) => {
        const data = res.map((val) => val.data)

        console.log('DATA', data)
        setData(data)
      })
      .catch((err) => {
        console.log('ARRR', err)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div className="container">
      <h1>Pokemon Codex</h1>
      <div>
        { loading ? 
          <h3>Loading ...</h3> :
          <div className="pokemon-container">
            {
              data.map((val) => {
                
                return (
                  <div class="card">
                    <div class="card-header">
                      { val.name }
                    </div>
                    <div className="card-body">
                      <img src={val.sprites.front_default} alt="pokemon front" />
                    </div>
                  </div>
                )
              })
            }
          </div>
        }
      </div>
    </div>
  );
}

export default App;
