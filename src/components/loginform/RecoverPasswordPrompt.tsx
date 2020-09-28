import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Login-Field Bottom Component, if user forgot password.
 */
const RecoverPasswordPrompt = (): JSX.Element => {
  return (
    <div className='login-form__register-redirect'>
      <div className='login-form__register-text'>
        Forgot your password?&nbsp;
      </div>
      <Link to='/recover-password' className='login-form__register-link'>
        Click here
      </Link>
    </div>
  );
};

export default RecoverPasswordPrompt;
