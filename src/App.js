import { useState, useEffect } from 'react';
import axios from 'axios'
import './App.scss';
import PokemonDetail from './pages/PokemonDetail';
import PokemonList from './pages/PokemonList'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <PokemonList />
          </Route>
          <Route path="/detail/:name">
            <PokemonDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
