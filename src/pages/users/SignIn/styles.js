import { StyleSheet } from 'react-native';

import { COLORS, SIZES, FONTS } from '../../../utils';

const styles = StyleSheet.create({
  emailAppendContainer: { justifyContent: 'center' },

  emailComponent: {
    marginTop: SIZES.padding,
  },

  passwordContainer: {
    marginTop: SIZES.radius,
  },
  passwordAppendContainer: {
    width: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  passwordAppendImage: {
    height: 25,
    width: 30,
    fontSize: 22,
  },

  fogotPasswordComponent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '100%',
    padding: 10,
    marginBottom: SIZES.padding,
    // paddingBottom: SIZES.padding,
  },
  fogotPasswordText: {
    color: COLORS.gray,
    ...FONTS.body4,
  },

  signUpButtonText: {
    color: COLORS.green,
    ...FONTS.body4,
  },

  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.radius,
  },
  signUpText: { color: COLORS.grey, ...FONTS.body3 },
});

export default styles;
