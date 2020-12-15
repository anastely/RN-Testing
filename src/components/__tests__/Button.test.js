import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import {Button} from '../Button';
import {mockComponent} from '../../../testing-config/mockComponent';

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => {
    return mockComponent(
      'react-native/Libraries/Components/Touchable/TouchableOpacity',
      (props) => {
        return {
          onPress: props.disabled ? () => {} : props.onPress,
        };
      },
    );
  },
);

test('can press the button', () => {
  const onPressMock = jest.fn();
  const {getByText} = render(<Button text="anas" onPress={onPressMock} />);

  fireEvent.press(getByText('anas'));
  expect(onPressMock).toHaveBeenCalled();
  expect(onPressMock.mock.calls.length).toBe(1);

  fireEvent.press(getByText('anas'));
  expect(onPressMock.mock.calls.length).toBe(2);
});

test('onPress is not called when button is disabled', () => {
  const onPressMock = jest.fn();
  const {getByText} = render(
    <Button text="Testing" onPress={onPressMock} disabled={true} />,
  );

  fireEvent.press(getByText('Testing'));
  expect(onPressMock).not.toHaveBeenCalled();
});
