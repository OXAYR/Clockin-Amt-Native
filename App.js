import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/Screens/LoginScreen/Index';
import Home from './src/Screens/HomeScreen/Index';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        height: heightPercentageToDP('100%'),
      }}>
      {/* <Login /> */}
      <Home />
    </View>
  );
};

export default App;
