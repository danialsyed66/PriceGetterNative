import { StyleSheet } from 'react-native';

import { images, FONTS, SIZES, COLORS } from '../../../utils';

const styles = StyleSheet.create({
  lebelContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  lebel: {
    color: COLORS.gray,
    ...FONTS.body4,
  },
  errorMsg: {
    color: COLORS.red,
    ...FONTS.body4,
  },

  inputContainer: {
    flexDirection: 'row',
    height: 45,
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.base,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
  input: { flex: 1 },
});

export default styles;
