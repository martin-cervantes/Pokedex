import { ADD_POKEMONS } from '../actions';

const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POKEMONS:
      return [...state, ...action.pokemons];
    default:
      return state;
  }
};

export default pokemonsReducer;
