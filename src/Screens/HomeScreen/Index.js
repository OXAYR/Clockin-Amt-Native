import {View, Text, SafeAreaView} from 'react-native';
import React, {useState} from 'react';
import Button from '../../Components/Button';
import {styles} from './styles';

const Home = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const handleClockedButtonPress = () => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    console.log('here is the time ', time);
    setIsClockedIn(!isClockedIn);
  };

  return (
    <SafeAreaView style={styles.homeWrapper}>
      <View>
        <Button
          buttonText={isClockedIn ? 'Clock Out' : 'Clock In'}
          buttonStyle={
            isClockedIn ? styles.clockOutButton : styles.clockInButton
          }
          onButtonClick={handleClockedButtonPress}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
