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

export const fetchData = url => dispatch => {
  fetch(url)
    .then(response => response.json())
    .then(data => dispatch(addPokemon({
      id: data.id,
      name: data.name,
      types: data.types.map(t => {
        const { name } = t.type;
        return name.charAt(0).toUpperCase() + name.slice(1);
      }),
      weight: data.weight,
      height: data.height,
      stats: data.stats.map(s => ({ name: s.stat.name, base: s.base_stat })),
      abilities: data.abilities.map(a => a.ability.name),
      moves: data.moves.map(m => m.move.name),
      sprite: data.sprites.other.dream_world.front_default,
    })));
};
