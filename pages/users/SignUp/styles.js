import { StyleSheet } from 'react-native';

import { COLORS, SIZES, FONTS } from '../../../utils';

const styles = StyleSheet.create({
  emailAppendContainer: { justifyContent: 'center' },

  title: {
    paddingTop: 0,
    marginTop: 10,
  },

  passwordContainer: {
    marginBottom: SIZES.radius,
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

  fogotPasswordComponent: {},

  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: SIZES.radius,
  },
  signInText: { color: COLORS.grey, ...FONTS.body3 },
  signInButtonText: {
    color: COLORS.green,
    ...FONTS.body4,
  },

  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 40,
  },
  lebel: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
  avatarActions: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPreviewContainer: {
    width: 55,
    height: '100%',
  },
  avatarPreview: {
    width: '100%',
    height: '100%',
    borderRadius: 500,
    resizeMode: 'contain',
  },

  checkboxContainer: {
    flexDirection: 'row',
    margin: 20,
    marginTop: 10,
  },
  checkbox: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: SIZES.body4,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  checkboxTouch: {},
});

export default styles;
