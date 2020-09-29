import React from 'react';
import { mount } from 'enzyme';
import DefaultLogin from '../DefaultLogin';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({
  loginOptions: { external: true, recover: true, icons: true, register: true },
});

it('should have userinput and password-fields', () => {
  const wrapper = mount(
    <HashRouter>
      <Provider store={store}>
        <DefaultLogin />
      </Provider>
    </HashRouter>
  );

  const usernameField = wrapper.find('#username');
  const passwordField = wrapper.find('#password');

  expect(usernameField).toHaveLength(1);
  expect(passwordField).toHaveLength(1);
});
