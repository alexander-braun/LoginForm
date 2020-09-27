import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/main.css';
import { Router } from 'react-router-dom';
import history from './helper/history';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
