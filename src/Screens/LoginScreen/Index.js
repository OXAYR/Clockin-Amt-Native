import {View, Text, Image, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Input from '../../Components/Input';
import {style} from './styles';
import Button from '../../Components/Button';
import CustomText from '../../Components/CustomText';

const Login = ({navigation}) => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (field, value) => {
    setLoginForm({
      ...loginForm,
      [field]: value,
    });
  };

  const handleLoginButtonPress = () => {
    console.log('Here is the loginForm data: ', loginForm);
  };

  return (
    <SafeAreaView style={style.loginWrapper}>
      <CustomText text="Clock In" style={style.title} />
      <View style={style.loginImageWrapper}>
        <Image
          style={style.loginImage}
          source={require('../../assets/login.png')}
        />
      </View>
      <Input
        label="Email"
        placeholder="Enter your email"
        onInputText={text => handleInputChange('email', text)} // Update email
      />

      <Input
        label="Password"
        placeholder="Enter your password"
        isPassword={true}
        onInputText={text => handleInputChange('password', text)} // Update password
      />
      <View style={style.buttonWrapper}>
        <Button
          buttonText="Login"
          buttonStyle={style.buttonStyle}
          onButtonClick={handleLoginButtonPress}
        />
        <View style={style.orWrapper}>
          <View style={style.orDashedBorder}></View>
          <CustomText text="or" style={style.orText} />
          <View style={style.orDashedBorder}></View>
        </View>
        <Button
          buttonText="Login As Admin"
          buttonStyle={style.adminButtonStyle}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;
