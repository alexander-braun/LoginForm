import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Img
import logo from '../../img/logo.jpg';

//Redux stuff
import { Authorized } from '../../actions/constants';
import { AppState } from '../../reducers';

/**
 * Interfaces setup
 */
interface RecoverPasswordForm {
  authorized: Authorized;
}

/**
 * Recover Password Component
 */
function RecoverPasswordForm(): JSX.Element {
  return (
    <div className='login-form'>
      <div className='login-form__container'>
        <img src={logo} alt='Zertificon Logo' className='login-form__logo' />
        <h1 className='login-form__title'>Recover Password Form</h1>
      </div>
      <Link to='/login' className='logged-in__switch'>
        Login
      </Link>
    </div>
  );
}

interface StateProps {
  authorized: Authorized;
}

const mapStateToProps = (state: AppState): StateProps => ({
  authorized: state.auth,
});

export default connect(mapStateToProps)(RecoverPasswordForm);
