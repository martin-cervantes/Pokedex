import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../containers/Header';
import PokemonsList from '../containers/PokemonsList';
import { fetchData } from '../actions';

const url = 'https://pokeapi.co/api/v2/pokemon/';

const App = props => {
  useEffect(() => {
    for (let num = 1; num <= 10; num += 1) {
      props.fetchData(`${url}${num}`);
    }
  });

  return (
    <div>
      <Header />
      <PokemonsList />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(fetchData(url)),
});

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
