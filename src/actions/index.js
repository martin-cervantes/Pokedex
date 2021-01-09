export const ADD_POKEMON = 'ADD_POKEMON';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const addPokemon = pokemon => ({
  type: ADD_POKEMON,
  pokemon,
});

export const changeFilter = pokemonType => ({
  type: CHANGE_FILTER,
  pokemonType,
});
