import React from 'react';
import {render} from '@testing-library/react-native';
import CreateAccount from '../CreateAccount';

test('should render all inputs as expected', () => {
  const {toJSON} = render(<CreateAccount />);
  expect(toJSON()).toMatchSnapshot();
});
