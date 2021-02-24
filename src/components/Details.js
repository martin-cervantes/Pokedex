import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchPokemonInfo } from '../actions';

class Details extends React.Component {
  constructor(props) {
    super(props);

    const { fetchPokemonInfo, match, history } = this.props;
    const { id } = match.params;
    this.id = id;
    this.history = history;
    fetchPokemonInfo(id);
    window.scrollTo(0, 0);

    this.state = {
      weight: 0,
      height: 0,
      stats: [],
      abilities: [],
      moves: [],
    };
  }

  componentDidUpdate() {
    const url = 'https://pokemons-api-project.herokuapp.com/pokemon_info/';

    fetch(`${url}${this.id}`)
      .then(response => response.json())
      .then(data => this.setState(data));
  }

  render() {
    const { pokemons } = this.props;
    const pokemon = pokemons.find(p => p.id === parseInt(this.id, 10));

    const {
      name,
      types,
      image,
    } = pokemon;

    const {
      weight,
      height,
      stats,
      abilities,
      moves,
    } = this.state;

    return (
      <div className="pokemon_details">
        <div className="section1">
          <div className="pokemon_container">
            <img className="pokemon_img" src={image} alt={name} />

            <p className="pokemon_name">{name}</p>

            <div className="pokemon_num">{this.id}</div>
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
              { stats.map(s => <div key={uuidv4()} className="progressbar"><div style={{ width: `${s}px` }} /></div>) }
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

        <button type="button" className="back" onClick={this.history.goBack}>Back</button>
      </div>
    );
  }
}

Details.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  pokemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchPokemonInfo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  pokemons: state.pokemons,
});

const mapDispatchToProps = dispatch => ({
  fetchPokemonInfo: id => dispatch(fetchPokemonInfo(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);
