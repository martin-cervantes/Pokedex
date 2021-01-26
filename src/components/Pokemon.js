import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pokemon = ({ data }) => {
  const history = useHistory();

  const {
    id,
    name,
    sprite,
  } = data;

  return (
    <div className="pokemon_container">
      <img className="pokemon_img" src={sprite} alt={name} />

      <button type="button" className="pokemon_name" onClick={() => history.push(`/pokemon/${id}`)}>
        {name}
      </button>

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
