import { ADD_POKEMON } from '../actions';
import { pokemons } from '../store/init';

const pokemonsReducer = (state = pokemons, action) => {
  switch (action.type) {
    case ADD_POKEMON:
      return [...state,
        {
          id: action.pokemon.id,
          name: action.pokemon.name,
          types: action.pokemon.types,
          weight: action.pokemon.weight,
          height: action.pokemon.height,
          stats: action.pokemon.stats,
          abilities: action.pokemon.abilities,
          moves: action.pokemon.moves,
          sprites: action.pokemon.sprites,
        },
      ];
    default:
      return state;
  }
};

export default pokemonsReducer;
