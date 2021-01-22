import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Details = ({ match, pokemons, history }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { id } = match.params;
  const pokemon = pokemons.find(p => p.id === parseInt(id, 10));

  const {
    name,
    types,
    weight,
    height,
    stats,
    abilities,
    moves,
    sprite,
  } = pokemon;

  return (
    <div className="pokemon_details">
      <div className="section1">
        <div className="pokemon_container">
          <img className="pokemon_img" src={sprite} alt={name} />

          <p className="pokemon_name">{name}</p>

          <div className="pokemon_num">{id}</div>
        </div>

        <div className="pokemon_stats">
          <div className="group">
            <p><strong>Type:</strong></p>
            <p><strong>Weight:</strong></p>
            <p><strong>Height:</strong></p>
            <p className="label"><strong>HP:</strong></p>
            <p className="label"><strong>Attack:</strong></p>
            <p className="label"><strong>Defense:</strong></p>
            <p className="label"><strong>Special-attack:</strong></p>
            <p className="label"><strong>Special-defense:</strong></p>
            <p className="label"><strong>Speed:</strong></p>
          </div>

          <div className="group">
            <div className="left type">
              { types.map(t => <div key={uuidv4()} className={`${t} capsule`}>{t}</div>) }
            </div>
            <p className="left">{weight}</p>
            <p className="left">{height}</p>
            { stats.map(s => <div key={uuidv4()} className="progressbar"><div style={{ width: s.base }} /></div>) }
          </div>
        </div>
      </div>

      <div className="section2">
        <strong className="underline">Abilities:</strong>
        <ul>
          { abilities.map(a => <li key={uuidv4()}>{a}</li>) }
        </ul>
      </div>

      <div className="section2">
        <strong className="underline">Moves:</strong>
        <ul>
          { moves.map(m => <li key={uuidv4()}>{m}</li>) }
        </ul>
      </div>

      <button type="button" className="back" onClick={history.goBack} href="">Back</button>
    </div>
  );
};

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

export default connect(mapStateToProps, null)(Details);
