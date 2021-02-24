export const ADD_POKEMONS = 'ADD_POKEMONS';
export const ADD_POKEMON_INFO = 'ADD_POKEMON_INFO';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const addPokemons = pokemons => ({
  type: ADD_POKEMONS,
  pokemons,
});

export const addPokemonInfo = pokemonInfo => ({
  type: ADD_POKEMON_INFO,
  pokemonInfo,
});

export const changeFilter = pokemonType => ({
  type: CHANGE_FILTER,
  pokemonType,
});

export const fetchPokemons = count => dispatch => {
  const url = 'https://pokemons-api-project.herokuapp.com/pokemons/';

  fetch(`${url}${count}`)
    .then(response => response.json())
    .then(data => dispatch(addPokemons(data)));
};

export const fetchPokemonInfo = id => dispatch => {
  const url = 'https://pokemons-api-project.herokuapp.com/pokemon_info/';

  fetch(`${url}${id}`)
    .then(response => response.json())
    .then(data => dispatch(addPokemonInfo(data)));
};
