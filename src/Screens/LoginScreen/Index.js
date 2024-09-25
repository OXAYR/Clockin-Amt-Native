import {View, Text, Image, SafeAreaView} from 'react-native';
import React from 'react';
import Input from '../../Components/Input';
import {style} from './styles';
import Button from '../../Components/Button';
import CustomText from '../../Components/CustomText';

const Login = () => {
  return (
    <SafeAreaView style={style.loginWrapper}>
      <Image
        style={style.loginImage}
        source={require('../../assets/login.png')}
      />
      <Input label="Email" placeholder="Enter Your Email" />
      <Input
        label="Password"
        placeholder="Enter Your password"
        isPassword={true}
      />
      <View style={style.buttonWrapper}>
        <Button buttonText="Login" buttonStyle={style.buttonStyle} />
        <View style={style.orWrapper}>
          <View style={style.orDashedBorder}></View>
          <CustomText text="or" style={style.orText} />
          <View style={style.orDashedBorder}></View>
        </View>
        <Button
          buttonText="login as admin"
          buttonStyle={style.adminButtonStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
