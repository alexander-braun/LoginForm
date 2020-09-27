import React from 'react';
import logo from './logo.jpg';
import History from '../../helper/history';
import { Link } from 'react-router-dom';

function Register(): JSX.Element {
  return (
    <div className='login-form'>
      <div className='login-form__container'>
        <img src={logo} alt='Zertificon Logo' className='login-form__logo' />
        <h1 className='login-form__title'>Register Form</h1>
      </div>
      <Link to='/login' className='logged-in__switch'>
        Back to Login
      </Link>
    </div>
  );
}

export default Register;
