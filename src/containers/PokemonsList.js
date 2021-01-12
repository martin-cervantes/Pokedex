import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pokemon from '../components/Pokemon';

const PokemonsList = ({ pokemons }) => (
  <div className="pokemons">
    {
      pokemons.map(pokemon => <Pokemon key={pokemon.id} data={pokemon} />)
    }
  </div>
);

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  filter: state.filter,
});

export default connect(mapStateToProps, null)(PokemonsList);
