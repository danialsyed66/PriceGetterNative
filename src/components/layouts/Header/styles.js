import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '8%',
    backgroundColor: COLORS.white,
    borderColor: COLORS.backgroundMedium,
    borderBottomWidth: 1,
  },
  icons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '1.6%',
    paddingHorizontal: '9%',
  },
  title: {
    width: '73%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    ...FONTS.h2,
  },
});

export default styles;
