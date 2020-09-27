import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo.jpg';
import googlelogo from './img/btn_google_signin_dark_normal_web@2x.png';
import facebooklogo from './img/fb-login-button-png-4-png-image-facebook-login-button-png-600_145 (1).png';
import HiddenSvg from '../svg/HiddenSvg';
import VisibleSvg from '../svg/VisibleSvg';
import UsericonSvg from '../svg/UsericonSvg';
import LockiconSvg from '../svg/LockiconSvg';
import { connect } from 'react-redux';
import { Authorized, LoginOptions } from '../../actions/constants';
import { authorize } from '../../actions/authorize';
import { AppState } from '../../reducers';
import History from '../../helper/history';
import { useDispatch } from 'react-redux';

interface loginData {
  username: string;
  password: string;
}

interface LoginForm {
  authorized: Authorized;
  loginOptions: LoginOptions;
}

function LoginForm({ authorized, loginOptions }: LoginForm) {
  const dispatch = useDispatch();
  const [passwordVisible, togglePasswordVisible] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<loginData>({
    username: '',
    password: '',
  });
  const [usernameValid, setUsernameValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);

  const updateFieldValidity = (e: React.FormEvent<HTMLInputElement>): void => {
    const target = e.currentTarget.id;
    const value = e.currentTarget.value;
    if (target === 'password') {
      setPasswordValid(value.length > 8);
    } else if (target === 'username') {
      setUsernameValid(value.length > 8);
    }
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { id, value } = e.currentTarget;
    setLoginData((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    updateFieldValidity(e);
  };

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (usernameValid && passwordValid) {
      dispatch(authorize(true));
    }
  };

  const mockExternalLogin = () => {
    dispatch(authorize(true));
  };

  useEffect(() => {
    if (authorized) {
      History.push('/logged-in');
    }
  });

  return (
    <form className='login-form' onSubmit={(e) => e.preventDefault()}>
      <div className='login-form__container'>
        <img src={logo} alt='Zertificon Logo' className='login-form__logo' />
        <h1 className='login-form__title'>Management Center</h1>
      </div>
      <div className='login-form__container'>
        <div className='login-form__field login-form__field--username'>
          <input
            onChange={handleChange}
            value={loginData.username}
            id='username'
            className='login-form__input'
            type='text'
            name='username'
            required
            autoFocus
          />
          <label
            htmlFor='username'
            id='username_label'
            className={`login-form__label ${
              usernameValid ? ' login-form__label--valid' : ''
            }`}
          >
            {loginOptions.icons && <UsericonSvg />}
            Username *
          </label>
          <div
            className={`login-form__error-message ${usernameValid && 'hidden'}`}
            id='username-error'
          >
            Field Is Required
          </div>
        </div>
        <div className='login-form__field login-form__field--password'>
          <div
            className='login-form__svg-container'
            title='Toggle Visibility'
            onClick={() => togglePasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <VisibleSvg /> : <HiddenSvg />}
          </div>
          <input
            value={loginData.password}
            onChange={handleChange}
            id='password'
            className='login-form__input'
            type={passwordVisible ? 'text' : 'password'}
            name='password'
            required
          />
          <label
            htmlFor='password'
            id='password_label'
            className={`login-form__label ${
              passwordValid ? 'login-form__label--valid' : ''
            }`}
          >
            {loginOptions.icons && <LockiconSvg />}
            Password *
          </label>
          <div
            onChange={updateFieldValidity}
            id='password-error'
            className={`login-form__error-message ${
              passwordValid ? 'hidden' : ''
            }`}
          >
            Field Is Required
          </div>
        </div>
        <div
          className={`login-form__field login-form__field--submit-buttons ${
            !loginOptions.register ? 'login-form__field--no-register' : ''
          }`}
        >
          {loginOptions.register && (
            <Link
              to='/register'
              className='login-form__button login-form__button--register'
            >
              REGISTER
            </Link>
          )}
          <button
            onClick={handleSubmit}
            type='submit'
            className='login-form__button login-form__button--login'
          >
            LOGIN
          </button>
        </div>
      </div>
      {loginOptions.external && (
        <div className='login-form__container'>
          <div className='login-form__centered-text'>Or login with</div>
          <div className='login-form__alternative-methods'>
            <div className='login-form__extended-login-logo'>
              <img
                onClick={mockExternalLogin}
                alt='Google Login'
                src={facebooklogo}
              ></img>
            </div>
            <div className='login-form__extended-login-logo'>
              <img
                onClick={mockExternalLogin}
                alt='Google Login'
                src={googlelogo}
              ></img>
            </div>
          </div>
        </div>
      )}
      {loginOptions.recover && (
        <div className='login-form__register-redirect'>
          <div className='login-form__register-text'>
            Forgot your password?&nbsp;
          </div>
          <Link to='/recover-password' className='login-form__register-link'>
            Click here
          </Link>
        </div>
      )}
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
