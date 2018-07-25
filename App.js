import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

import getTheme from './src/assets/themes/components';
import sakorahTheme from './src/assets/themes/variables/sakorahTheme';
import { StyleProvider } from 'native-base';

import Register from './src/views/account/Register';
import Login from './src/views/account/Login';
import Me from './src/views/pages/Me';
import Settings from './src/views/pages/Settings';

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(sakorahTheme)}>
        <Routing />
      </StyleProvider>);
  }
}

const Routing = createStackNavigator(
  {
    Register: Register,
    Login: Login,
    Me: Me,
    Settings: Settings
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      header: null
    },
  }
);