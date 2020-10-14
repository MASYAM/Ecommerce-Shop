import React, { useState } from 'react';

import { SafeAreaView} from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import ReduxThunk from 'redux-thunk';
import { LegacyNavigator } from './src/navigation/LegacyNavigator';

import cartReducer from './src/store/reducers/cart';
import inboxReducer from './src/store/reducers/inbox';

import profileReducer from './src/store/reducers/profile';
import productsReducer from './src/store/reducers/products';
import authReducer from './src/store/reducers/auth';
import appReducer from './src/store/reducers/app';


const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  products:productsReducer,
  cart:cartReducer,
  profile:profileReducer,
  inbox:inboxReducer

});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "roboto-regular": require("./assets/fonts/roboto-regular.ttf"),
    "allan-regular": require("./assets/fonts/allan-regular.ttf"),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'proximanova-bold': require('./assets/fonts/proximanova-bold.ttf'),
    'proximanova-medium': require('./assets/fonts/proximanova-medium.ttf'),
    'proximanova-regular': require('./assets/fonts/proximanova-regular.ttf')
  });

};

export default function App() {
  return (
    <Provider store={store}>
    <LegacyNavigator />
  </Provider>
  );
}
