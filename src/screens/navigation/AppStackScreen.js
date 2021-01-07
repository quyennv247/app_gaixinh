import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GirlStackScreen from './GirlStackScreen';
import AccountStackScreen from './AccountStackScreen';
import AlbumStackScreen from './AlbumStackScreen';
import VideoStackScreen from './VideoStackScreen';
import NewsStackScreen from './NewsStackScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
AntDesign.loadFont();
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

    switch (route.name){

      case "Girl":
        iconName = "home";
        break;
      case "Video":
        iconName = "profile";
        break;
      case "Album":
        iconName = "bells";
        break;
      case "News":
        iconName = "bells";
        break;
      case "Account":
        iconName = "user";
        break;
      default:
        iconName = "home";
    }

    return <AntDesign name={iconName} size={24} color={ focused ? COLORS.primary : COLORS.white } />;

  },
});

const MainTabScreen = () => {
    return (
        <Tab.Navigator tabBarOptions={tabBarOptions} screenOptions={screenOptions} >
            <Tab.Screen name="Girl" tabBarLabel="Girl" component={GirlStackScreen} />
            <Tab.Screen name="Video" options={{ tabBarLabel: 'Đơn hàng' }} component={VideoStackScreen} />
            <Tab.Screen name="Album" options={{ tabBarLabel: 'Thông báo' }} component={AlbumStackScreen} />
            <Tab.Screen name="News" options={{ tabBarLabel: 'Tài khoản' }} component={NewsStackScreen} />
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