/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import {waitFor} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders app stack correctly', async () => {
    const component = <App />;
    await waitFor(() => renderer.create(component));
  });
});
