import React from 'react';
import logo from './logo.jpg';
import History from '../../helper/history';

function Register(): JSX.Element {
  const handleClick = () => {
    History.push('/login');
  };

  return (
    <div className='login-form'>
      <div className='login-form__container'>
        <img src={logo} alt='Zertificon Logo' className='login-form__logo' />
        <h1 className='login-form__title'>Register Form</h1>
      </div>
      <button onClick={handleClick} className='logged-in__switch'>
        Back to Login
      </button>
    </div>
  );
}

export default Register;
