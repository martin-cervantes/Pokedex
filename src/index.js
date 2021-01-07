import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import icon from './assets/pokeball.png';

import './assets/style/reset.scss';

ReactDOM.render(
  <Provider store={store}>
    <h1>Hello Wolrd</h1>
  </Provider>,
  document.getElementById('root'),
);


const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = icon;
document.getElementsByTagName('head')[0].appendChild(link);
