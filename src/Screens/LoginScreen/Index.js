import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Input from '../../Components/Input';

const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Image source={require('../../assets/login.png')} />
        <Input />
        <Input />
      </View>
    </SafeAreaView>
  );
};

export default Login;
