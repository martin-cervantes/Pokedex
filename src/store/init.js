const url = 'https://pokeapi.co/api/v2/pokemon/';

const pokemons = [];

const getPokemon = async (num) => {
  try {
    const response = await fetch(`${url}${num}`, { mode: 'cors' });

    const data = await response.json();

    pokemons.push({
      id: data.id,
      name: data.name,
      types: data.types.map(t => (t.type.name)),
      weight: data.weight,
      height: data.height,
      stats: data.stats.map(s => ({ name: s.stat.name, base: s.base_stat })),
      abilities: data.abilities.map(a => a.ability.name),
      moves: data.moves.map(m => m.move.name),
      sprite: data.sprites.other.dream_world.front_default,
    });

    return data;
  } catch (error) {
    alert(error);
  }
  return false;
};

const types = [
  'Bug',
  'Dark',
  'Dragon',
  'Electric',
  'Fairy',
  'Fighting',
  'Fire',
  'Flying',
  'Ghost',
  'Grass',
  'Ground',
  'Ice',
  'Normal',
  'Poison',
  'Psychic',
  'Rock',
  'Steel',
  'Water',
];

for (let i = 1; i <= 3; i += 1) {
  getPokemon(i);
}

export { pokemons, types };
