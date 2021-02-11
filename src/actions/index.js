export const ADD_POKEMONS = 'ADD_POKEMONS';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const addPokemons = pokemons => ({
  type: ADD_POKEMONS,
  pokemons,
});

export const changeFilter = pokemonType => ({
  type: CHANGE_FILTER,
  pokemonType,
});

export const fetchData = count => dispatch => {
  const url = 'https://pokemons-api-project.herokuapp.com/pokemons/';

  fetch(`${url}${count}`)
    .then(response => response.json())
    .then(data => dispatch(addPokemons(data)));
};
