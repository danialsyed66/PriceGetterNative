import { Dimensions, StyleSheet } from 'react-native';

import { images, FONTS, SIZES, COLORS } from '../../../utils';

const calPercentage = (total, percent) => (percent * total) / 100;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  scrollContainerWithKeyboard: {
    height: Dimensions.get('window').height,
    paddingHorizontal: SIZES.padding,
  },

  logoTouch: {
    height: 100,
    width: 200,
  },

  titleContainer: {
    margin: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  titleText: { textAlign: 'center', ...FONTS.h1, fontWeight: '400' },
});

export default styles;
