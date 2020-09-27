import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

//Styles
import './styles/main.css';

//Helper
import history from './helper/history';
import store from './store';

//Components
import App from './components/App';

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
