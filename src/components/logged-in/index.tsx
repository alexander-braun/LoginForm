import React from 'react';
import logo from './logo.jpg';
import { connect } from 'react-redux';
import { Authorized } from '../../actions/constants';
import { AppState } from '../../reducers';
import History from '../../helper/history';

interface RecoverPasswordForm {
  authorized: Authorized;
}

function RecoverPasswordForm(): JSX.Element {
  const handleClick = () => {
    History.push('/login');
  };

  return (
    <div className='login-form'>
      <div className='login-form__container'>
        <img src={logo} alt='Zertificon Logo' className='login-form__logo' />
        <h1 className='login-form__title'>Login Success</h1>
      </div>
      <button onClick={handleClick} className='logged-in__switch'>
        Back to Login
      </button>
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
