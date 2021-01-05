import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GirlScreen from '../girl';

const GirlStack = createStackNavigator();

const GirlStackScreen = () => {
  return (
    <GirlStack.Navigator>
      <GirlStack.Screen name="Girl" options={{headerShown: false}} component={GirlScreen} />
    </GirlStack.Navigator>
  );
}

export default GirlStackScreen;