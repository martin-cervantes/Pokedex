import ADD_POKEMON from "./index.js";
import CHANGE_FILTER from "./index.js";
import addPokemon from "./index.js";
import changeFilter from "./index.js";

describe('Testing actions', () => {
  it('Should create an action to add a pokemon', () => {
    const pokemon = 'Bulbasaur';
    const expectedAction = {
      type: ADD_POKEMON,
      pokemon,
    }
    expect(addPokemon(pokemon)).toEqual(expectedAction);
  });

  it('Should create an action to filter a pokemon', () => {
    const pokemonType = 'Grass';
    const expectedAction = {
      type: CHANGE_FILTER,
      pokemonType,
    }
    expect(changeFilter(pokemonType)).toEqual(expectedAction);
  });
});
