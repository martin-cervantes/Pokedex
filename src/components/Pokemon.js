import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pokemon = ({ data }) => {
  const {
    id,
    name,
    sprite,
  } = data;

  return (
    <div className="pokemon_container">
      <img className="pokemon_img" src={sprite} alt={name} />
      <p className="pokemon_name">
        <Link className="pokemon_link" to={`/pokemon/${id}`}>
          {name}
        </Link>
      </p>
      <div className="pokemon_num">{id}</div>
    </div>
  );
};

Pokemon.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    sprite: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
