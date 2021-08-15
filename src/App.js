import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList'
import MyPokemonList from './pages/MyPokemonList'
import MobileNav from './pages/components/MobileNav';
import { Global, css } from '@emotion/react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


const GlobalStyle = css`
  html {
    font-size: 16px;

    @media (max-width: 991px) {
      font-size: 14px;
    }
  }

  body {
    margin: 0;
    padding: 0;
  }
`

function App() {
  return (
    <div>
      <Global styles={GlobalStyle} />
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
