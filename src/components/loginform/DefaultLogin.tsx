import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

//Redux
import { authorize } from '../../actions/authorize';
import { LoginOptions } from '../../actions/constants';
import { AppState } from '../../reducers';

//Components
import HiddenSvg from '../icons/Hidden';
import VisibleSvg from '../icons/Visible';
import UsericonSvg from '../icons/Usericon';
import LockiconSvg from '../icons/Lockicon';
import CloseSvg from '../icons/Close';

/**
 * Interfaces setup
 */
interface loginData {
  username: string;
  password: string;
}

interface LoginForm {
  loginOptions: LoginOptions;
}

/**
 * Default Login Component for Username/Password - login
 */
const DefaultLogin = ({ loginOptions }: LoginForm): JSX.Element => {
  const dispatch = useDispatch();
  const [passwordVisible, togglePasswordVisible] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<loginData>({
    username: '',
    password: '',
  });
  const [usernameValid, setUsernameValid] = useState<boolean>(false);
  const [passwordValid, setPasswordValid] = useState<boolean>(false);
  const [loginError, toggleLoginError] = useState<boolean>(false);

  /**
   * Login if username/password valid and dispatch authorization.
   */
  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.stopPropagation();

    /**
     * Replace if() with dispatch(login({username, password}))
     * Only checks if password and username are longer then 8 characters.
     * If username and password are provided but are < 8 characters,
     * loginError is displayed.
     */
    if (usernameValid && passwordValid) {
      dispatch(authorize(true));
    } else if (loginData.password.length && loginData.username.length) {
      toggleLoginError(true);
    }
  };

  /**
   * Tests password and username input field validity.
   * Removes login error when user starts typing again.
   */
  const updateFieldValidity = (e: React.FormEvent<HTMLInputElement>): void => {
    const target = e.currentTarget.id;
    const value = e.currentTarget.value;
    if (target === 'password') {
      setPasswordValid(value.length > 8);
    } else if (target === 'username') {
      setUsernameValid(value.length > 8);
    }

    if (loginError) {
      toggleLoginError(false);
    }
  };

  /**
   * Update Username / Password local state + test input fields validity.
   */
  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { id, value } = e.currentTarget;
    setLoginData((prevState) => ({
      ...prevState,
      [id]: value,
    }));

    /**
     * After updating username/password -> validate
     */
    updateFieldValidity(e);
  };

  /**
   * Checks if Login Error message and remove error after 5s.
   */
  useEffect(() => {
    if (loginError) {
      setTimeout(() => toggleLoginError(false), 5000);
    }
  }, [loginError]);

  return (
    <>
      {loginError && (
        <div className='login-form__login-error'>
          <div className='login-form__login-error-message'>
            <button
              onClick={() => toggleLoginError(false)}
              className='login-form__close-error'
              name='close'
            >
              <CloseSvg />
            </button>
            <strong>Error!</strong>&nbsp;Login Failed.
          </div>
        </div>
      )}
      <div className='login-form__container login-form__container--default-login'>
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
            Field is required
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
            Field is required
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
            className={`login-form__button login-form__button--login ${
              usernameValid && passwordValid ? 'login-form__button--valid' : ''
            }`}
          >
            LOGIN
          </button>
        </div>
      </div>
    </>
  );
};

interface StateProps {
  loginOptions: LoginOptions;
}

const mapStateToProps = (state: AppState): StateProps => ({
  loginOptions: state.loginOptions,
});

export default connect(mapStateToProps)(DefaultLogin);
