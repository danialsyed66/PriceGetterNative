import { StyleSheet } from 'react-native';

import { COLORS } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  productContainer: {
    height: 130,
    flexDirection: 'row',
    // marginVertical: 6,
    alignItems: 'center',
  },

  imageContainer: {
    width: 100,
    height: 100,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundLight,
    borderRadius: 10,
    marginRight: 22,
  },
  image: { width: '100%', height: '100%', resizeMode: 'contain' },

  contentContainer: {
    // width: '70%',
    flex: 1,
    height: '100%',
    justifyContent: 'space-around',
  },
  titleAlt: {
    fontSize: 14,
    paddingHorizontal: 30,
    paddingBottom: 22,
    color: COLORS.black,
    fontWeight: '500',
    letterSpacing: 1,
  },
  title: {
    flexDirection: 'row',
    marginBottom: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 14,
    // maxWidth: '100%',
    // maxWidth: '84%',
    color: COLORS.black,
    fontWeight: '600',
    letterSpacing: 1,
  },

  seller: { width: '30%' },
  sellerImage: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
  },

  priceContainer: {
    // marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.6,
  },
  priceText: {
    fontSize: 14,
    fontWeight: '400',
    maxWidth: '85%',
    marginRight: 4,
  },
  oldPriceText: {
    fontSize: 12,
    maxWidth: '85%',
    color: COLORS.gray,
    // marginBottom: 4,
    textDecorationLine: 'line-through',
  },

  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  quantityActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: { paddingRight: 20 },
  iconContainer: {
    borderRadius: 100,
    marginRight: 20,
    padding: 4,
    borderWidth: 1,
    borderColor: COLORS.backgroundMedium,
    opacity: 0.5,
  },
  icon: {
    fontSize: 16,
    color: COLORS.backgroundDark,
  },

  deleteIcon: {
    fontSize: 16,
    color: COLORS.backgroundDark,
    backgroundColor: COLORS.backgroundLight,
    padding: 8,
    borderRadius: 100,
  },
});

export default styles;
