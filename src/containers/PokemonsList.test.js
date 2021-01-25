import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import PokemonsList from './PokemonsList';
import store from '../store';

it('PokemonsList renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={store}>
      <PokemonsList />
    </Provider>, div,
  );
});
