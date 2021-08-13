import App from './App'
import PokemonDetail from './pages/PokemonDetail'

const routes = [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/detail/:id',
        component: PokemonDetail,
      }
    ]
  },
]