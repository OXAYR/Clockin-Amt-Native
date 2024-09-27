import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../../Components/Button';
import {styles} from './styles';
import Table from '../../Components/Table';
import {useDispatch, useSelector} from 'react-redux';
import {
  checkinRequest,
  fetchRecordsRequest,
} from '../../Redux/action/attendenceAction';
import {setAuthToken} from '../../../axios';

const Home = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const dispatch = useDispatch();
  const {user, token} = useSelector(state => state?.user?.data);
  console.log('here is the user =====>', token);
  const record = useSelector(state => state?.attendence?.data);
  console.log('here os the record', record);

  useEffect(() => {
    dispatch(fetchRecordsRequest(user?._id));
  }, [dispatch, user]);

  useEffect(() => {
    if (token) setAuthToken(token);
  }, [token]);
  const handleClockedButtonPress = () => {
    const date = new Date();
    const day = date.getDay();
    console.log('here is the date ', date);
    const time = date.toLocaleTimeString();
    console.log('here is the time ', time, user._id);
    setIsClockedIn(!isClockedIn);

    const data = {
      userId: user._id,
      date: date,
      inTime: time,
      status: 'P',
      day: day,
    };

    dispatch(checkinRequest(data));
  };

  return (
    <SafeAreaView style={styles.homeWrapper}>
      <Button
        buttonText={isClockedIn ? 'Clock Out' : 'Clock In'}
        buttonStyle={isClockedIn ? styles.clockOutButton : styles.clockInButton}
        onButtonClick={handleClockedButtonPress}
      />
      <View style={styles.tableWrapper}>
        <Table data={record} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
