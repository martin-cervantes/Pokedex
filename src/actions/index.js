export const ADD_POKEMON = 'ADD_POKEMON';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const addPokemon = (pokemon) => {
  return {
    type: ADD_POKEMON,
    pokemon,
  };
}

export const changeFilter = (type) => {
  return {
    type: CHANGE_FILTER,
    type,
  };
}
