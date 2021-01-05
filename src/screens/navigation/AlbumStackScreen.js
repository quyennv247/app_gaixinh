import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GirlScreen from '../girl';

const AlbumStack = createStackNavigator();

const AlbumStackScreen = () => {
  return (
    <GirlStack.Navigator>
      <GirlStack.Screen name="Girl" options={{headerShown: false}} component={GirlScreen} />
    </GirlStack.Navigator>
  );
}

export default AlbumStackScreen;