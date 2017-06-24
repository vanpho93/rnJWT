import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './components/Home';
import HelloAppScreen from './components/HelloApp';
import SignInScreen from './components/SignIn';

StatusBar.setHidden(true);

const App = StackNavigator({
    HelloApp: { screen: HelloAppScreen },
    SignIn: { screen: SignInScreen },
    Home: { screen: HomeScreen },
}, {
    headerMode: 'none'
});

export default App;
