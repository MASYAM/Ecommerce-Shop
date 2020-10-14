import React from 'react';
import {
  createSwitchNavigator,
  createAppContainer
} from 'react-navigation';
import {  createStackNavigator} from 'react-navigation-stack';
import {  createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
import { Platform, SafeAreaView, Button, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import StartupScreen from '../screens/StartupScreen';
import {Colors} from '../constants';
const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};
const MainNavigator = createSwitchNavigator({
  Startup: StartupScreen
});

export default createAppContainer(MainNavigator);
