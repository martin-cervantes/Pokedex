import { ADD_POKEMON } from '../actions';

const pokemonsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return [...state, action.pokemon];
    default:
      return state;
  }
};

export default pokemonsReducer;
