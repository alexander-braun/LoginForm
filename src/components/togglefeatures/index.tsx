import React from 'react';
import { AppState } from '../../reducers';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleLoginOptions } from '../../actions/toggleLoginOptions';
import { LoginOptions } from '../../actions/constants';

interface ToggleFeatures {
  loginOptions: LoginOptions;
}

const ToggleFeatures = ({ loginOptions }: ToggleFeatures) => {
  const dispatch = useDispatch();

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const id = e.currentTarget.id;
    if (
      id === 'recover' ||
      id === 'icons' ||
      id === 'external' ||
      id === 'register'
    ) {
      dispatch(
        toggleLoginOptions({
          ...loginOptions,
          [id]: !loginOptions[id],
        })
      );
    }
  };

  return (
    <div className='settings'>
      <h1 className='settings__heading'>Features</h1>
      <form className='settings__choice'>
        <div className='settings__field'>
          <input
            className='settings__option'
            type='checkbox'
            name='External-Login'
            value='external'
            id='external'
            onChange={handleChange}
            checked={loginOptions.external}
          />
          <label className='settings__label' htmlFor='External-Login'>
            External Login
          </label>
        </div>
        <div className='settings__field'>
          <input
            className='settings__option'
            type='checkbox'
            name='Recover-Password'
            value='recover'
            id='recover'
            onChange={handleChange}
            checked={loginOptions.recover}
          />
          <label className='settings__label' htmlFor='Recover-Password'>
            Recover Password
          </label>
        </div>
        <div className='settings__field'>
          <input
            className='settings__option'
            type='checkbox'
            name='Helper-Icons'
            value='icons'
            id='icons'
            onChange={handleChange}
            checked={loginOptions.icons}
          />
          <label className='settings__label' htmlFor='Helper-Icons'>
            Helper Icons
          </label>
        </div>
        <div className='settings__field'>
          <input
            className='settings__option'
            type='checkbox'
            name='Helper-Icons'
            value='register'
            id='register'
            onChange={handleChange}
            checked={loginOptions.register}
          />
          <label className='settings__label' htmlFor='Helper-Icons'>
            Register Field
          </label>
        </div>
      </form>
    </div>
  );
};

interface StateProps {
  loginOptions: LoginOptions;
}

const mapStateToProps = (state: AppState): StateProps => ({
  loginOptions: state.loginOptions,
});

export default connect(mapStateToProps)(ToggleFeatures);
