import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  loginWrapper: {
    marginVertical: heightPercentageToDP('5%'),
  },
  loginImage: {
    marginBottom: heightPercentageToDP('3%'),
  },
});
