import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CreateAccount from '../screens/CreateAccount';
import SignIn from '../screens/SignIn';

const AuthStack = createStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="CreateAccount" component={CreateAccount} />
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
