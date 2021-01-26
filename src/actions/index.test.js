import {
  ADD_POKEMON, CHANGE_FILTER, addPokemon, changeFilter,
} from './index';

describe('Testing actions', () => {
  it('Should create an action to add a pokemon', () => {
    const pokemon = 'Bulbasaur';
    const expectedAction = {
      type: ADD_POKEMON,
      pokemon,
    };
    expect(addPokemon(pokemon)).toEqual(expectedAction);
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
