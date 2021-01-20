import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TypeFilter from '../components/TypeFilter';
import Pokemon from '../components/Pokemon';
import { changeFilter } from '../actions';

class PokemonsList extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(event) {
    event.preventDefault();

    const { changeFilter } = this.props;

    changeFilter(event.target.value);
  }

  render() {
    const { pokemons, filter } = this.props;

    return (
      <div id="pokemons">
        <TypeFilter handleFilterChange={this.handleFilterChange} />
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
  }
}

PokemonsList.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
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
