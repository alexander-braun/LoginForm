import React from 'react';
import logo from './logo.jpg';
import { connect } from 'react-redux';
import { Authorized } from '../../actions/constants';
import { AppState } from '../../reducers';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authorize } from '../../actions/authorize';

interface LoggedIn {
  authorized: Authorized;
}

function LoggedIn(): JSX.Element {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authorize(false));
  };

  return (
    <div className='login-form'>
      <div className='login-form__container'>
        <img src={logo} alt='Zertificon Logo' className='login-form__logo' />
        <h1 className='login-form__title'>Login Success</h1>
      </div>
      <Link to='/login' onClick={handleClick} className='logged-in__switch'>
        Log out!
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

export default connect(mapStateToProps)(LoggedIn);
