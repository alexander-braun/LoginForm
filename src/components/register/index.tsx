import React from 'react';
import { Link } from 'react-router-dom';

//Img
import logo from '../../img/logo.jpg';

/**
 * Register Redirect from login Component
 */
function Register(): JSX.Element {
  return (
    <div className='mock-form'>
      <div className='mock-form__container'>
        <img src={logo} alt='Zertificon Logo' className='login-form__logo' />
        <h1 className='mock-form__title'>Register Form</h1>
      </div>
      <div className='mock-form__container'>
        <Link to='/' className='mock-form__go-back'>
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
