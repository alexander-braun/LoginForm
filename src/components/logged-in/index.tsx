import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Components
import { Authorized } from '../../actions/constants';

//Redux
import { AppState } from '../../reducers';
import { authorize } from '../../actions/authorize';

//Img
import logo from '../../img/logo.jpg';

/**
 * Interface Setup
 */
interface LoggedIn {
  authorized: Authorized;
}

/**
 * Default Mock Logged In component representing logged-in state.
 */
function LoggedIn(): JSX.Element {
  const dispatch = useDispatch();

  /**
   * Unauthorize User
   */
  const handleClick = (): void => {
    dispatch(authorize(false));
  };

  return (
    <div className='mock-form' data-testid='mock-form'>
      <div className='mock-form__container'>
        <img src={logo} alt='Zertificon Logo' className='mock-form__logo' />
        <h1 className='mock-form__title'>Login Success</h1>
      </div>
      <div className='mock-form__container'>
        <Link to='/' onClick={handleClick} className='mock-form__go-back'>
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
