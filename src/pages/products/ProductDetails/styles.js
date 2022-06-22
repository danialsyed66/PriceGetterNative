import { StyleSheet } from 'react-native';

import { COLORS } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
    position: 'relative',
  },
  statusBar: {
    backgroundColor: COLORS.white,
    barStyle: 'dark-content',
  },

  scrollViewContainer: {
    paddingHorizontal: 16,
    marginTop: 6,
  },

  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 14,
  },
  cartIcon: {
    fontSize: 18,
    color: COLORS.blue,
    marginRight: 6,
  },
  cartText: {
    fontSize: 12,
    color: COLORS.black,
  },

  title: {
    flexDirection: 'row',
    marginVertical: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: '600',
    letterSpacing: 0.5,
    marginVertical: 4,
    color: COLORS.black,
    maxWidth: '84%',
  },

  seller: { width: '20%' },
  sellerImage: {
    width: '100%',
    height: 80,
    resizeMode: 'contain',
  },

  description: {
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '400',
    letterSpacing: 1,
    opacity: 0.5,
    lineHeight: 20,
    maxHeight: '85%',
    // maxHeight: 44,
    marginBottom: 18,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 14,
    borderBottomColor: COLORS.backgroundLight,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  locationIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  locationIconContainer2: {
    color: COLORS.blue,
    backgroundColor: COLORS.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 100,
    marginRight: 10,
  },
  locationIcon: {
    color: COLORS.blue,
    fontSize: 16,
  },
  rightIcon: {
    color: COLORS.backgroundDark,
    fontSize: 16,
  },

  priceRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: COLORS.backgroundLight,
    borderBottomWidth: 1,
  },
  priceContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceText: {
    fontSize: 18,
    fontWeight: '500',
    maxWidth: '85%',
    color: COLORS.black,
    marginBottom: 4,
  },
  priceTextLight: {
    fontSize: 14,
    maxWidth: '85%',
    color: COLORS.gray,
    marginBottom: 4,
  },
  priceTextCrossed: {
    fontSize: 14,
    maxWidth: '85%',
    color: COLORS.gray,
    marginBottom: 4,
    textDecorationLine: 'line-through',
  },
  ratingIcon: {
    color: COLORS.green,
    fontSize: 18,
  },

  title2Text: {
    fontSize: 16,
    padding: 16,
    paddingBottom: 0,
    color: COLORS.black,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  sameContainer: {
    // paddingHorizontal: 16,
    paddingBottom: 15,
    borderBottomColor: COLORS.backgroundLight,
    borderBottomWidth: 1,
  },
});

export default styles;
