import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

const Input = ({placeholder, label, onInputText}) => {
  return (
    <>
      <View style={styles.inputFieldBox}>
        <Text>{label ? label : 'input'}</Text>
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          onChange={onInputText}
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
    margin: heightPercentageToDP(4),
  },
});
