
import { lazy, Suspense} from 'react'

import Background from 'assets/background.jpg'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
const PokemonList =  lazy(() => import('./pages/PokemonList'))
const MyPokemonList = lazy(() => import('./pages/MyPokemonList'))
const PokemonDetail = lazy(() => import('./pages/PokemonDetail'))
const NavBar = lazy(() => import('./pages/components/NavBar'));

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
                <Suspense fallback="<div>loading...</div>">
                  <PokemonList />
                </Suspense>
              </Route>
              <Route path="/detail/:name">
                <Suspense fallback="<div>loading...</div>">
                  <PokemonDetail />
                </Suspense>
              </Route>
              <Route path="/my-pokemon-list">
                <Suspense fallback="<div>loading...</div>">
                  <MyPokemonList />
                </Suspense>
              </Route>
            </Switch>

            <Suspense fallback="<div>loading...</div>">
              <NavBar />
            </Suspense>
          </Container>
        </Router>
    </div>
  );
}

export default App;
