import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';

//Utils
import { findByTestAttr } from '../../../utils/TestHelper';

//Component
import ExternalLogin from '../';

/**
 * Mock store setup
 */
const mockStore = configureMockStore();
const store = mockStore({
  loginOptions: { external: true, recover: true, icons: true, register: true },
});

/**
 * Wrapper Setup
 */
const setup = (props = {}) => {
  const wrapper = mount(
    <HashRouter>
      <Provider store={store}>
        <ExternalLogin {...props} />
      </Provider>
    </HashRouter>
  );
  return wrapper;
};

/**
 * Test
 */
describe('ExternalLogin Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    expect(findByTestAttr(component, 'external-login').length).toBe(1);
  });

  it('should have facebook and google login buttons', () => {
    const usernameField = findByTestAttr(component, 'external-login-facebook');
    const passwordField = findByTestAttr(component, 'external-login-google');

    expect(usernameField).toHaveLength(1);
    expect(passwordField).toHaveLength(1);
  });
});
