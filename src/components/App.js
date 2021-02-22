import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../containers/Header';
import PokemonsList from '../containers/PokemonsList';
import Details from './Details';
import { fetchPokemons } from '../actions';

const App = ({ fetchPokemons }) => {
  const [count, setCount] = useState(100);

  const addMorePokemons = () => {
    setCount(count + 50);
    if (count <= 650) fetchPokemons(count);
    window.scrollTo(0, 0);
  };

  useEffect(() => { if (count === 100) fetchPokemons(50); });

  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/" exact component={() => <PokemonsList count={count} addMorePokemons={addMorePokemons} />} />
          <Route path="/pokemon/:id" component={Details} />
        </Switch>

        <footer>
          <p id="credits_text">
            Copyleft
            <span id="copyleft">
              &copy;
            </span>
            2021 Martin Cervantes
          </p>
        </footer>
      </div>
    </Router>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchPokemons: count => dispatch(fetchPokemons(count)),
});

App.propTypes = {
  fetchPokemons: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
