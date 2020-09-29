import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';

//Components
import ToggleFeatures from '../index';

//Utils
import { findByTestAttr } from '../../../utils/TestHelper';

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
        <ToggleFeatures {...props} />
      </Provider>
    </HashRouter>
  );
  return wrapper;
};

/**
 * Test
 */
describe('ToggleFeatures Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should have 4 features', () => {
    const featureOptions = findByTestAttr(component, 'toggle-features-option');
    expect(featureOptions).toHaveLength(4);
  });
});
