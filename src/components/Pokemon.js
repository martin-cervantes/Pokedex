import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pokemon = ({ data }) => {
  const {
    id,
    name,
    types,
    weight,
    height,
    stats,
    abilities,
    moves,
    sprite,
  } = data;

  return (
    <div className="pokemon_container">
      <div>id: {id}</div>
      <div>name: {name}</div>
      <div>types: { types.map(t => t) } </div>
      <div>weight: {weight}</div>
      <div>height: {height}</div>
      { stats.map(s => (<div>{ s.name }: { s.base }</div>)) }
      <div>abilities: { abilities.map(a => a) } </div>
      <div>moves: { moves.map(m => m) }</div>
      <img src={sprite} alt={name} />
      <Link className="button" to={`/pokemon/${id}`}>Details</Link>
    </div>
  );
};

Pokemon.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.string).isRequired,
    weight: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    stats: PropTypes.arrayOf(PropTypes.object).isRequired,
    abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    moves: PropTypes.arrayOf(PropTypes.string).isRequired,
    sprite: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
