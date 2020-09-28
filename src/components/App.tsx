import React from 'react';
import { Route, HashRouter } from 'react-router-dom';

//Components
import LoginForm from './loginform';
import RecoverPasswordForm from './recover-password';
import ToggleFeatures from './togglefeatures';
import LoggedIn from './logged-in';
import Register from './register';

function App(): JSX.Element {
  return (
    <HashRouter basename='/'>
      <ToggleFeatures />
      <Route exact path='/' component={LoginForm} />
      <Route exact path='/recover-password' component={RecoverPasswordForm} />
      <Route exact path='/logged-in' component={LoggedIn} />
      <Route exact path='/register' component={Register} />
    </HashRouter>
  );
}

export default App;
