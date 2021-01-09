import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({ data }) => {
  const {
    id,
    name,
    types,
    weight,
    height,
    stats,
    sprites,
  } = data;

  return (
    <div className="pokemon_container">
      {id}
      {name}
      {types}
      {weight}
      {height}
      {stats}
      {sprites}
    </div>
  );
};

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

export default Pokemon;
