import { ADD_POKEMONS, ADD_POKEMON_INFO } from '../actions';

const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POKEMONS:
      return [...state, ...action.pokemons];
    case ADD_POKEMON_INFO:
      return [...state.slice(0, action.pokemonInfo.id - 1),
        { ...state[action.pokemonInfo.id - 1], ...action.pokemonInfo },
        ...state.slice(action.pokemonInfo.id)];
    default:
      return state;
  }
};

export default pokemonsReducer;
