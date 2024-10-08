import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  loginWrapper: {
    flexDirection: 'column',
    marginVertical: heightPercentageToDP('5%'),
    backgroundColor: 'white',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#007487',
    textAlign: 'center',
  },
  loginImageWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginImage: {
    marginBottom: heightPercentageToDP('3%'),
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(30),
    objectFit: 'contain',
  },
  buttonStyle: {
    width: widthPercentageToDP('80%'),
    height: heightPercentageToDP('6%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#147A68',
  },
  adminButtonStyle: {
    width: widthPercentageToDP('80%'),
    height: heightPercentageToDP('6%'),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007487',
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
