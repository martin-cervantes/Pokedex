import reducer from './pokemons';
import ADD_POKEMON from '../actions';

describe('Pokemon reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })


  it('should handle ADD_POKEMON', () => {
    expect(
      reducer([], {
        type: ADD_POKEMON,
        pokemon: 'Bulbasaur',
      })
    ).toEqual([])
  })
})
