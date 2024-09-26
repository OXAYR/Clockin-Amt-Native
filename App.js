import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/Screens/LoginScreen/Index';
import Home from './src/Screens/HomeScreen/Index';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './src/navigation/index';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
