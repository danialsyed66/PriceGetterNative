import { StyleSheet } from 'react-native';

import { FONTS, SIZES } from '../../../utils';

const styles = StyleSheet.create({
  contentContainer: {
    margin: SIZES.padding,
    marginHorizontal: SIZES.radius,
    paddingVertical: SIZES.padding,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: SIZES.base,
  },
  key: {
    ...FONTS.body2,
    fontWeight: '500',
  },
  value: {
    ...FONTS.body3,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default styles;
