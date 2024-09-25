import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/Screens/LoginScreen/Index';
import Home from './src/Screens/HomeScreen/Index';

const App = () => {
  return (
    <View style={{backgroundColor: 'white'}}>
      {/* <Login /> */}
      <Home />
    </View>
  );
};

export default App;
