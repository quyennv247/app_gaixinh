import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NewsScreen from '../news';
import NewsDetailScreen from "../newsDetail";

const NewsStack = createStackNavigator();

const NewsStackScreen = () => {
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name="News" options={{headerShown: false}} component={NewsScreen} />
      <NewsStack.Screen name="News-Detail" options={{headerShown: false}} component={NewsDetailScreen} />
    </NewsStack.Navigator>
  );
}

export default NewsStackScreen;