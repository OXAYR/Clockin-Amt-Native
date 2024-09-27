import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Button from '../../Components/Button';
import {styles} from './styles';
import Table from '../../Components/Table';
import {useDispatch, useSelector} from 'react-redux';
import {
  checkinRequest,
  checkoutRequest,
  fetchRecordsRequest,
} from '../../Redux/action/attendenceAction';
import {setAuthToken} from '../../../axios';
import {ActivityIndicator} from 'react-native-paper';

const Home = () => {
  const [isClockedIn, setIsClockedIn] = useState(false);
  const dispatch = useDispatch();
  const {user, token} = useSelector(state => state?.user?.data);
  console.log('here is the user =====>', token);
  const record = useSelector(state => state?.attendence?.data);
  const isLoading = useSelector(state => state?.attendence?.loading);
  console.log('here is the id loadin', isLoading);
  const isPresentToday = useSelector(
    state => state?.attendence?.isPresentToday,
  );
  const todayRecordId = useSelector(state => state?.attendence?.todayRecordId);

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
    if (!isPresentToday) dispatch(checkinRequest(data));
    else {
      const payload = {
        userId: user._id,
        outTime: time,
        attendenceId: todayRecordId,
      };
      dispatch(checkoutRequest(payload));
    }
  };

  return (
    <SafeAreaView style={styles.homeWrapper}>
      <Button
        buttonText={isPresentToday ? 'Clock Out' : 'Clock In'}
        buttonStyle={
          isPresentToday ? styles.clockOutButton : styles.clockInButton
        }
        onButtonClick={handleClockedButtonPress}
      />
      <View style={styles.tableWrapper}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Table data={record} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
