import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Details = ({ match, pokemons }) => {
  const { id } = match.params;
  const pokemon = pokemons.find(p => p.id === parseInt(id, 10));

  return (
    <div>
      <h1>Pokemon Details</h1>
      <div>{id}</div>
      <div>name: {pokemon.name}</div>
      <Link to="/">Back</Link>
    </div>
  );
};

Details.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

export default connect(mapStateToProps, null)(Details);
