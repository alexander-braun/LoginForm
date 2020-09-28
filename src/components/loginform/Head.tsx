import React from 'react';

//Img
import logo from '../../img/logo.jpg';

/**
 * Head for Login Form
 */
const Head = (): JSX.Element => {
  return (
    <div className='login-form__container'>
      <img src={logo} alt='Zertificon Logo' className='login-form__logo' />
      <h1 className='login-form__title'>Management Center</h1>
    </div>
  );
};

export default Head;
