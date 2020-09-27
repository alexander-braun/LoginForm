import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './loginform';
import RecoverPasswordForm from './recover-password';
import History from '../helper/history';
import ToggleFeatures from './togglefeatures';
import LoggedIn from './logged-in';
import Register from './register';

function App(): JSX.Element {
  console.log(process.env.PUBLIC_URL);
  return (
    <>
      <ToggleFeatures />
      <Router history={History}>
        <Switch>
          <Route exact path='/LoginForm/login'>
            <LoginForm />
          </Route>
          <Route exact path='/LoginForm/recover-password'>
            <RecoverPasswordForm />
          </Route>
          <Route exact path='/LoginForm/logged-in'>
            <LoggedIn />
          </Route>
          <Route exact path='/LoginForm/register'>
            <Register />
          </Route>
          <Redirect exact from='/LoginForm' to='/LoginForm/login' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
