import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//Img
import logo from '../../img/logo.jpg';

//Redux
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
    <div className='mock-form'>
      <div className='mock-form__container'>
        <img src={logo} alt='Zertificon Logo' className='mock-form__logo' />
        <h1 className='mock-form__title'>Recover Password Form</h1>
      </div>
      <div className='mock-form__container'>
        <Link to='/' className='mock-form__go-back'>
          Back to Login
        </Link>
      </div>
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
