import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../containers/Header';
import PokemonsList from '../containers/PokemonsList';
import Details from './Details';
import { fetchData } from '../actions';

const App = ({ fetchData }) => {
  useEffect(() => fetchData(50));

  return (
    <Router>
      <div>
        <Header />

        <Switch>
          <Route path="/" exact component={PokemonsList} />
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
  fetchData: count => dispatch(fetchData(count)),
});

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
