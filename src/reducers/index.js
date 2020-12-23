import { combineReducers } from 'redux';
import pokemonsReducer from './pokemons';
import filterReducer from './filter';

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  filter: filterReducer,
});

export default rootReducer;
