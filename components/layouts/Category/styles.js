import { StyleSheet } from 'react-native';

import { FONTS, COLORS } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  contentContainer: {
    paddingVertical: 20,

    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '33%',
  },
  image: {
    resizeMode: 'contain',
    width: 90,
    height: 100,
  },
  text: { ...FONTS.body3, fontWeight: '500' },
  titleText: {
    fontSize: 16,
    // padding: 16,
    paddingBottom: 0,
    color: COLORS.black,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  more: {
    width: '100%',
    backgroundColor: COLORS.white,
    borderColor: COLORS.backgroundMedium,
    color: COLORS.black,
  },
  moreIcons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    padding: '4%',
  },
  ruler: {
    borderTopWidth: 1,
    height: 0,
    width: '25%',
    top: '7%',
    borderColor: COLORS.backgroundMedium,
  },
});

export default styles;
