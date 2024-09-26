import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/Screens/LoginScreen/Index';
import Home from './src/Screens/HomeScreen/Index';
import {NavigationContainer} from '@react-navigation/native';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const App = () => {
  return (
    <NavigationContainer>
      <View
        style={{
          backgroundColor: 'white',
          height: heightPercentageToDP('100%'),
        }}>
        {/* <Login /> */}
        <Home />
      </View>
    </NavigationContainer>
  );
};

export default App;
