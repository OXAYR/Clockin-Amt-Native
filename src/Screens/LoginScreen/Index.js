import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Input from '../../Components/Input';
import {style} from './styles';

const Login = () => {
  return (
    <SafeAreaView style={style.loginWrapper}>
      <Image
        style={style.loginImage}
        source={require('../../assets/login.png')}
      />
      <Input label="Email" placeholder="Enter Your Email" />
      <Input
        label="password"
        placeholder="Enter Your password"
        isPassword={true}
      />
    </SafeAreaView>
  );
};

export default Login;
