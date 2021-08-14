import './App.scss';
import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList'
import MyPokemonList from './pages/MyPokemonList'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"


function App() {
  return (
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
    </Router>
  );
}

export default App;
