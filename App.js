import React, {useState} from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Provider} from 'react-redux'
import store from './redux/store'

import Home from './component/Home'
import DisplayLove from './component/DisplayLove'

const Stack = createStackNavigator();

console.log('WELCOME')
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DisplayLove" component={DisplayLove} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}