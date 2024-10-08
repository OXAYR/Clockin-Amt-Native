import {StyleSheet} from 'react-native';
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
    backgroundColor: 'white',
  },
  clockInButton: {
    width: widthPercentageToDP('24%'),
    height: heightPercentageToDP('6%'),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00A5C1',
  },
  clockOutButton: {
    width: widthPercentageToDP('24%'),
    height: heightPercentageToDP('6%'),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE6700',
  },
  tableWrapper: {
    width: widthPercentageToDP('100%'),
    height: heightPercentageToDP('50%'),
    marginVertical: heightPercentageToDP('5%'),
  },
});
