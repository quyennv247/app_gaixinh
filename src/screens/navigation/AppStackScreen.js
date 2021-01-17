import * as React from 'react';
import { Platform } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GirlStackScreen from './GirlStackScreen';
import AccountStackScreen from './AccountStackScreen';
import AlbumStackScreen from './AlbumStackScreen';
import VideoStackScreen from './VideoStackScreen';
import NewsStackScreen from './NewsStackScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();

import Entypo from 'react-native-vector-icons/Entypo';
Entypo.loadFont();

import { COLORS } from './../../constants';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../auth/LoginScreen";
import RegistryScreen from "../auth/RegistryScreen";

const Tab = createBottomTabNavigator();

const tabBarOptions = {
    showLabel: true,
    style: {
      backgroundColor: COLORS.bgHeader,
      borderTopColor: COLORS.bgHeader,
      paddingBottom: 5
    },
    activeTintColor: COLORS.primary,
    inactiveTintColor: COLORS.white,
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    let iconName = "home";
    let size = Platform.OS == 'ios' ? 24 : 20
    switch (route.name){

      case "Girl":
        return <Entypo name='heart-outlined' size={size} color={ focused ? COLORS.primary : COLORS.white } />;
        break;
      case "Video":
        return <Entypo name='youtube' size={size} color={ focused ? COLORS.primary : COLORS.white } />;
        break;
      case "Album":
        return <Entypo name='images' size={size} color={ focused ? COLORS.primary : COLORS.white } />;
        break;
      case "News":
        return <Entypo name='news' size={size} color={ focused ? COLORS.primary : COLORS.white } />;
        break;
      case "Account":
        iconName = "user";
        break;
      default:
        iconName = "home";
    }

    return <AntDesign name={iconName} size={size} color={ focused ? COLORS.primary : COLORS.white } />;

  },
});

const MainTabScreen = () => {
    return (
        <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions} >
            <Tab.Screen name="Girl" options={{ tabBarLabel: 'Gái gọi' }} component={GirlStackScreen} />
            <Tab.Screen name="Video" options={{ tabBarLabel: 'Phim sex' }} component={VideoStackScreen} />
            <Tab.Screen name="Album" options={{ tabBarLabel: 'Ảnh sex' }} component={AlbumStackScreen} />
            <Tab.Screen name="News" options={{ tabBarLabel: 'Ký sự' }} component={NewsStackScreen} />
            <Tab.Screen name="Account" options={{ tabBarLabel: 'Tài khoản' }} component={AccountStackScreen} />
        </Tab.Navigator>
    );
}

const AppStack = createStackNavigator();
const AppStackScreen = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="App" options={{headerShown: false}} component={MainTabScreen} />
      <AppStack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} />
      <AppStack.Screen name="Registry" options={{headerShown: false}} component={RegistryScreen} />
    </AppStack.Navigator>
  );
}

export default AppStackScreen;