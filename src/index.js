import React from 'react';
import ReactDOM from 'react-dom';

import icon from './assets/pokeball.png';

import './assets/style/reset.scss';

ReactDOM.render(
  <h1>
    Hello World
  </h1>,
  document.getElementById('root')
);


const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = icon;
document.getElementsByTagName('head')[0].appendChild(link);
