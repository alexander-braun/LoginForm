import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';

//Utils
import { findByTestAttr } from '../../../utils/TestHelper';

//Component
import DefaultLogin from '../DefaultLogin';

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
        <DefaultLogin {...props} />
      </Provider>
    </HashRouter>
  );
  return wrapper;
};

/**
 * Test
 */
describe('DefaultLogin Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    expect(findByTestAttr(component, 'default-login').length).toBe(1);
  });

  it('should have userinput and password-fields', () => {
    const usernameField = findByTestAttr(component, 'username');
    const passwordField = findByTestAttr(component, 'password');

    expect(usernameField).toHaveLength(1);
    expect(passwordField).toHaveLength(1);
  });
});
