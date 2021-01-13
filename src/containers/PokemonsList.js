import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pokemon from '../components/Pokemon';

const PokemonsList = ({ pokemons, filter }) => (
  <div className="pokemons">
    {
      pokemons
        .filter(pokemon => (filter === 'All' ? true : pokemon.types.some(type => type === filter)))
        .map(pokemon => <Pokemon key={pokemon.id} data={pokemon} />)
    }
  </div>
);

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  filter: state.filter,
});

export default connect(mapStateToProps, null)(PokemonsList);
