import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Button from '../../Components/Button';
import {styles} from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.homeWrapper}>
      <View>
        <Button buttonText="Clock In" buttonStyle={styles.button} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
