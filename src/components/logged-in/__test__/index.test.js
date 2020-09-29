import React from 'react';
import { mount } from 'enzyme';
import LoggedIn from '../index';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import logoImg from '../../../img/logo.jpg';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({});

const wrapper = mount(
  <HashRouter>
    <Provider store={store}>
      <LoggedIn />
    </Provider>
  </HashRouter>
);

it('should render heading, logo and link', () => {
  const heading = wrapper.find('h1');
  const link = wrapper.find('Link');

  expect(heading.text()).toBe('Login Success');
  expect(link.text()).toBe('Back to Login');
});

it('should render the correct logo', () => {
  const logo = wrapper.find('img');
  expect(logo).toBeTruthy();
  expect(logo.prop('src')).toEqual(logoImg);
});
