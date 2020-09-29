import React from 'react';
import { mount } from 'enzyme';
import RecoverPassword from '../index';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';

//Img
import logoImg from '../../../img/logo.jpg';

//Utils
import { findByTestAttr } from '../../../utils/TestHelper';

/**
 * Mock store setup
 */
const mockStore = configureMockStore();
const store = mockStore({});

/**
 * Wrapper Setup
 */
const setup = (props = {}) => {
  const wrapper = mount(
    <HashRouter>
      <Provider store={store}>
        <RecoverPassword {...props} />
      </Provider>
    </HashRouter>
  );
  return wrapper;
};

describe('RecoverPassword component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render heading and link', () => {
    const heading = findByTestAttr(
      component,
      'recover-password-heading'
    ).text();
    const link = component.find('Link').text();

    expect(heading).toBe('Recover Password Form');
    expect(link).toBe('Back to Login');
  });

  it('should render the correct logo', () => {
    const logo = findByTestAttr(component, 'recover-password-logo');

    expect(logo.prop('src')).toEqual(logoImg);
  });
});
