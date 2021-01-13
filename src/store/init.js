const url = 'https://pokeapi.co/api/v2/pokemon/';

const pokemons = [];

for (let num = 1; num <= 3; num += 1) {
  fetch(`${url}${num}`, { mode: 'cors' })
    .then(response => response.json())
    .then(data => {
      pokemons.push({
        id: data.id,
        name: data.name,
        types: data.types.map(t => (t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1))),
        weight: data.weight,
        height: data.height,
        stats: data.stats.map(s => ({ name: s.stat.name, base: s.base_stat })),
        abilities: data.abilities.map(a => a.ability.name),
        moves: data.moves.map(m => m.move.name),
        sprite: data.sprites.other.dream_world.front_default,
      });
    });
}

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

export { pokemons, types };
