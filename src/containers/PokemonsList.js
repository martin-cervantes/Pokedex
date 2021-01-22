import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TypeFilter from '../components/TypeFilter';
import Pokemon from '../components/Pokemon';
import { changeFilter } from '../actions';

const PokemonsList = ({ pokemons, filter, changeFilter }) => {
  const handleFilterChange = event => {
    event.preventDefault();

    changeFilter(event.target.value);
  };

  return (
    <div id="pokemons">
      <TypeFilter value={filter} handleFilterChange={handleFilterChange} />
      {
        pokemons
          .sort((a, b) => {
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            return 0;
          })
          .filter(pokemon => (filter === 'All' ? true : pokemon.types.some(type => type === filter)))
          .map(pokemon => <Pokemon key={pokemon.id} data={pokemon} />)
      }
    </div>
  );
};

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsList);
