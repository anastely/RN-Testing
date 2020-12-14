import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {TextField} from '../Form';

test('renders the passed label', () => {
  const {getByText, queryByText} = render(<TextField label="Test Label" />);
  expect(getByText('Test Label')).not.toBeNull();
  expect(queryByText('-anas')).toBeNull();
});

test('forward remaining props to the underlying TextInput', () => {
  const onChangeTextMock = jest.fn();
  const {getByTestId} = render(
    <TextField
      label="Test Label"
      passedProps="yes"
      onChangeText={onChangeTextMock}
    />,
  );
  expect(getByTestId('Form.TextInput').props).toEqual(
    expect.objectContaining({
      passedProps: 'yes',
    }),
  );
  fireEvent.changeText(getByTestId('Form.TextInput'), 'testing!');
  expect(onChangeTextMock).toHaveBeenCalled();
  expect(onChangeTextMock).toHaveBeenCalledWith('testing!');
  expect(onChangeTextMock).not.toHaveBeenCalledWith('no!');
});
