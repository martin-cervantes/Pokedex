const url = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemon = async (num) => {
  try {
    const response = await fetch(`${url}${num}`, { mode: 'cors' });

    const data = await response.json();

    pokemons.push(data);

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
  'Water'
];

const pokemons = [];

for (let i = 1; i <= 151; i++) {
	getPokemon(i);
}

export { pokemons, types };
