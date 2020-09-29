import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';

//Utils
import { findByTestAttr } from '../utils/TestHelper';

//Component
import App from './App';

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
        <App {...props} />
      </Provider>
    </HashRouter>
  );
  return wrapper;
};

/**
 * Test
 */
describe('App Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render without errors', () => {
    expect(findByTestAttr(component, 'main-app-component').length).toBe(1);
  });
});
