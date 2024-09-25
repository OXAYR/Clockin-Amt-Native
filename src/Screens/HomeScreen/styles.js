import {StyleSheet} from 'react-native';
import Button from '../../Components/Button';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  homeWrapper: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: heightPercentageToDP('5%'),
  },
  button: {
    width: widthPercentageToDP('24%'),
    height: heightPercentageToDP('6%'),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A5C1',
  },
});
