import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Button = ({buttonText, buttonStyle, onButtonClick}) => {
  return (
    <View>
      <TouchableOpacity style={buttonStyle} onPress={onButtonClick}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    flex: 1,
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    paddingTop: heightPercentageToDP('1.5'),
  },
});

export default Button;
