import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  loginWrapper: {
    flexDirection: 'column',
    marginVertical: heightPercentageToDP('5%'),
  },
  loginImage: {
    marginBottom: heightPercentageToDP('3%'),
  },
  buttonStyle: {
    width: widthPercentageToDP('80%'),
    height: heightPercentageToDP('6%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#147A68',
  },
  buttonWrapper: {
    marginVertical: widthPercentageToDP(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  orWrapper: {
    flexDirection: 'row',
    marginVertical: heightPercentageToDP(4),
  },
  orDashedBorder: {
    height: 1,
    borderTopColor: 'gray',
    borderStyle: 'dashed',
    borderTopWidth: 1,
    width: heightPercentageToDP('18%'),
  },
  orText: {
    fontSize: 16,
    color: 'gray',
  },
});
