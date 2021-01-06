import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GirlScreen from '../girl';
import GirlDetailScreen from '../girlDetail';

const GirlStack = createStackNavigator();

const GirlStackScreen = () => {
  return (
    <GirlStack.Navigator>
      <GirlStack.Screen name="Girl" options={{headerShown: false}} component={GirlScreen} />
      <GirlStack.Screen name="Girl-Detail" options={{headerShown: false}} component={GirlDetailScreen} />
    </GirlStack.Navigator>
  );
}

export default GirlStackScreen;