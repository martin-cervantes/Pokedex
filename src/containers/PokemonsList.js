import React from 'react';
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

Pokemon.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(
      PropTypes.shape({
        slot: PropTypes.number.isRequired,
        name: PropTypes.exact({
          name: PropTypes.string,
          url: PropTypes.string,
        }),
      }),
    ),
    weight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        base_stat: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
    sprites: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
  filter: state.filter,
});

export default connect(mapStateToProps, null)(PokemonsList);
