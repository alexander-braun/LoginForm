import React from 'react';
import { authorize } from '../../actions/authorize';
import { useDispatch } from 'react-redux';

//Img
import googlelogo from './img/btn_google_signin_dark_normal_web@2x.png';
import facebooklogo from './img/fb-login-button-png-4-png-image-facebook-login-button-png-600_145 (1).png';

/**
 * Google / Facebook Login Component
 */
const ExternalLogin = (): JSX.Element => {
  const dispatch = useDispatch();

  /**
   * Login with Facebook/Google is assumed to be true by default.
   */
  const mockExternalLogin = (): void => {
    dispatch(authorize(true));
  };

  return (
    <div
      className='login-form__container login-form__container--external-login'
      data-test='external-login'
    >
      <div className='login-form__centered-text'>Or login with</div>
      <div className='login-form__alternative-methods'>
        <div className='login-form__extended-login-logo'>
          <img
            data-test='external-login-facebook'
            onClick={mockExternalLogin}
            alt='Google Login'
            src={facebooklogo}
          ></img>
        </div>
        <div className='login-form__extended-login-logo'>
          <img
            data-test='external-login-google'
            onClick={mockExternalLogin}
            alt='Google Login'
            src={googlelogo}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default ExternalLogin;
