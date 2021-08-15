import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList'
import MyPokemonList from './pages/MyPokemonList'
import MobileNav from './pages/components/MobileNav';
import Background from 'assets/background.jpg'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: auto;
  background-color: transparent;
  box-shadow: 12px 0 15px -4px rgba(0, 0, 0, 0, 0.8), -12px 0 8px -4px rgba(0, 0, 0, 0, 0.8);

  @media (min-width: 992px) {
    width: 60%;
    background-color: rgb(255,255,255, 0.2);
  }
`

const GlobalStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');

  html {
    font-size: 16px;

    @media (max-width: 991px) {
      font-size: 14px;
    }

    @media (max-width: 320px) {
      font-size: 12px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Play', sans-serif;
    color: #3D3D3D;
    background-image: url('${Background}');
    background-size: cover;
  }
`

function App() {
  return (
    <div>
      <Global styles={GlobalStyle} />
        <Router>
          <Container>
            <Switch>
              <Route exact path="/">
                <PokemonList />
              </Route>
              <Route path="/detail/:name">
                <PokemonDetail />
              </Route>
              <Route path="/my-pokemon-list">
                <MyPokemonList />
              </Route>
            </Switch>

            <MobileNav />
          </Container>
        </Router>
    </div>
  );
}

export default App;
