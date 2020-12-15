import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import CreateAccount from '../CreateAccount';

test('should render all inputs as expected', () => {
  const {toJSON} = render(<CreateAccount />);
  expect(toJSON()).toMatchSnapshot();
});

test('displays error message if all fileds are not completed', () => {
  const {getByTestId, getByText} = render(<CreateAccount />);

  let errorMsg = getByTestId('CreateAccount.errorMeessage').props.children;
  const submit = getByText('Submit');
  // when component is rendered we expect errorMsg be null
  expect(errorMsg).toBeNull();

  // when press submit before completed all fileds we expected errorMsg to not be null
  fireEvent.press(submit);
  expect(
    getByTestId('CreateAccount.errorMeessage').props.children,
  ).not.toBeNull();

  // Still errorMsg its not null
  fireEvent.changeText(getByTestId('CreateAccount.email'), 'test@mail.io');
  expect(
    getByTestId('CreateAccount.errorMeessage').props.children,
  ).not.toBeNull();
});
