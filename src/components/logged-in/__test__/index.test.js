import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';

//Components
import LoggedIn from '../index';

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
        <LoggedIn {...props} />
      </Provider>
    </HashRouter>
  );
  return wrapper;
};

describe('LoggedIn Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render heading, logo and link', () => {
    const heading = findByTestAttr(component, 'logged-in-heading');
    const link = component.find('Link');

    expect(heading.text()).toBe('Login Success');
    expect(link.text()).toBe('Back to Login');
  });

  it('should render the correct logo', () => {
    const logo = findByTestAttr(component, 'logged-in-logo');
    expect(logo.prop('src')).toEqual(logoImg);
  });
});
