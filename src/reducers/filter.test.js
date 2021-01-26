import reducer from './filter';
import CHANGE_FILTER from '../actions';

describe('Pokemon reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual('All');
  });

  it('should handle CHANGE_FILTER', () => {
    expect(
      reducer('Fighting', {
        type: CHANGE_FILTER,
        pokemonType: 'Fighting',
      }),
    ).toEqual('Fighting');
  });
});
