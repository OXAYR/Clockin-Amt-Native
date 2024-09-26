import {View, Text, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

const Input = ({placeholder, label, onInputText, isPassword}) => {
  return (
    <>
      <View style={styles.inputFieldBox}>
        <Text style={styles.label}>{label ? label : 'label'}</Text>
        <TextInput
          style={styles.inputField}
          placeholder={placeholder}
          onChangeText={onInputText}
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
    borderColor: 'gray',
    borderRadius: widthPercentageToDP(5),
    paddingHorizontal: widthPercentageToDP(3),
    color: '#000000',
  },
  inputFieldBox: {
    marginHorizontal: heightPercentageToDP(5),
    marginVertical: heightPercentageToDP(1),
  },
  label: {
    marginBottom: heightPercentageToDP(1),
  },
});
