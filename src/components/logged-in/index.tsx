import React from 'react';
import logo from '../../img/logo.jpg';
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
    <div className='mock-form'>
      <div className='mock-form__container'>
        <img src={logo} alt='Zertificon Logo' className='mock-form__logo' />
        <h1 className='mock-form__title'>Login Success</h1>
      </div>
      <div className='mock-form__container'>
        <Link to='/login' onClick={handleClick} className='mock-form__go-back'>
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

export default connect(mapStateToProps)(LoggedIn);
