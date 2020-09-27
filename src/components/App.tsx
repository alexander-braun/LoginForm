import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './loginform';
import RecoverPasswordForm from './recover-password';
import History from '../helper/history';
import ToggleFeatures from './togglefeatures';
import LoggedIn from './logged-in';
import Register from './register';

function App(): JSX.Element {
  return (
    <>
      <ToggleFeatures />
      <Router history={History}>
        <Switch>
          <Route exact path='/login'>
            <LoginForm />
          </Route>
          <Route exact path='/recover-password'>
            <RecoverPasswordForm />
          </Route>
          <Route exact path='/logged-in'>
            <LoggedIn />
          </Route>
          <Route exact path='/register'>
            <Register />
          </Route>
          <Redirect exact from='/' to='/login' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
