import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//Components
import LoginFormHead from './Head';
import LoginFormDefaultLogin from './DefaultLogin';
import ExternalLogin from './ExternalLogin';
import RecoverPasswordPrompt from './RecoverPasswordPrompt';

//Redux
import { Authorized, LoginOptions } from '../../actions/constants';
import { AppState } from '../../reducers';

/**
 * Interfaces setup
 */
interface LoginForm {
  authorized: Authorized;
  loginOptions: LoginOptions;
}

/**
 * Main Login Form Component
 */
function LoginForm({ authorized, loginOptions }: LoginForm): JSX.Element {
  /**
   * Check authorized status on change and
   * if authorized route to '/logged-in'
   */
  useEffect(() => {
    if (authorized) {
      window.location.hash = 'logged-in';
    }
  }, [authorized]);

  return (
    <form className='login-form' onSubmit={(e) => e.preventDefault()}>
      <LoginFormHead />
      <LoginFormDefaultLogin />
      {loginOptions.external && <ExternalLogin />}
      {loginOptions.recover && <RecoverPasswordPrompt />}
    </form>
  );
}

interface StateProps {
  authorized: Authorized;
  loginOptions: LoginOptions;
}

const mapStateToProps = (state: AppState): StateProps => ({
  authorized: state.auth,
  loginOptions: state.loginOptions,
});

export default connect(mapStateToProps)(LoginForm);
