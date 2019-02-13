import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/reset.css';
import './assets/css/grid.css';
import './assets/css/menu.css';
import './assets/css/font-awesome.css';
import './assets/css/style.css';

import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
