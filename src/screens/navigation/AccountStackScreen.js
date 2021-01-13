import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../account';

const AccountStack = createStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator>
      <AccountStack.Screen name="Account" options={{headerShown: false}} component={AccountScreen} />
    </AccountStack.Navigator>
  );
}

export default AccountStackScreen;