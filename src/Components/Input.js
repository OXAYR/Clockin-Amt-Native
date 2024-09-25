import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Input = ({placeholder, label, onInputText, isPassword}) => {
  return (
    <>
      <View style={styles.inputFieldBox}>
        <Text>{label ? label : 'label'}</Text>
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          onChange={onInputText}
          secureTextEntry={isPassword}
        />
      </View>
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputField: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,

    color: '#000000',
  },
  inputFieldBox: {
    marginHorizontal: heightPercentageToDP(5),
    marginVertical: heightPercentageToDP(1),
  },
});
