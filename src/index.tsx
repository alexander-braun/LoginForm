import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';

//Styles
import './styles/main.css';

//Redux store
import store from './store';

//Components
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
