import React from 'react';
import { mount } from 'enzyme';
import RecoverPassword from '../index';
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
      <RecoverPassword />
    </Provider>
  </HashRouter>
);

it('should render heading and link', () => {
  const heading = wrapper.find('h1');
  const headingTextContent = heading.text();
  const link = wrapper.find('Link');
  const linkTextContent = link.text();

  expect(headingTextContent).toBe('Recover Password Form');
  expect(linkTextContent).toBe('Back to Login');
});

it('should render the correct logo', () => {
  const logo = wrapper.find('img');

  expect(logo).toBeTruthy();
  expect(logo.prop('src')).toEqual(logoImg);
});
