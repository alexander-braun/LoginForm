import React from 'react';
import { mount } from 'enzyme';
import ToggleFeatures from '../index';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();
const store = mockStore({
  loginOptions: { recover: true, external: true, icons: true, register: true },
});

const wrapper = mount(
  <HashRouter>
    <Provider store={store}>
      <ToggleFeatures />
    </Provider>
  </HashRouter>
);

it('should have 4 features', () => {
  const featureOptions = wrapper.find('input');
  expect(featureOptions).toHaveLength(4);
});
