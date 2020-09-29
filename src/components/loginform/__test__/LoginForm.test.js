import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';

//Utils
import { findByTestAttr } from '../../../utils/TestHelper';

//Component
import LoginForm from '../';

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
        <LoginForm {...props} />
      </Provider>
    </HashRouter>
  );
  return wrapper;
};

/**
 * Test
 */
describe('LoginForm Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    expect(findByTestAttr(component, 'login-form-wrapper').length).toBe(1);
  });
});
