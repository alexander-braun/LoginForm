import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';

//Img
import logoImg from '../../../img/logo.jpg';

//Components
import Register from '../index';

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
        <Register {...props} />
      </Provider>
    </HashRouter>
  );
  return wrapper;
};

/**
 * Test
 */
describe('Register Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render heading and link', () => {
    const heading = findByTestAttr(component, 'register-heading');
    const link = component.find('Link');

    expect(heading.text()).toBe('Register Form');
    expect(link.text()).toBe('Back to Login');
  });

  it('should render the correct logo', () => {
    const logo = findByTestAttr(component, 'register-logo');
    expect(logo.prop('src')).toEqual(logoImg);
  });
});
