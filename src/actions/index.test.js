import {
  ADD_POKEMONS, CHANGE_FILTER, addPokemons, changeFilter,
} from './index';

describe('Testing actions', () => {
  it('Should create an action to add a pokemon', () => {
    const pokemons = 'Bulbasaur';
    const expectedAction = {
      type: ADD_POKEMONS,
      pokemons,
    };
    expect(addPokemons(pokemons)).toEqual(expectedAction);
  });

  it('Should create an action to filter a pokemon', () => {
    const pokemonType = 'Grass';
    const expectedAction = {
      type: CHANGE_FILTER,
      pokemonType,
    };
    expect(changeFilter(pokemonType)).toEqual(expectedAction);
  });
});
