import { StyleSheet } from 'react-native';

import { COLORS } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    width: '48%',
    marginVertical: 14,
  },

  imageContainer: {
    width: '100%',
    height: 100,
    borderRadius: 10,
    backgroundColor: COLORS.backgroundLight,
    marginBottom: 8,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  discount: {
    position: 'absolute',
    width: '20%',
    height: '24%',
    backgroundColor: COLORS.green,
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  heartContainer: {
    position: 'absolute',
    width: '13%',
    height: '26%',
    top: 2,
    right: 4,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1,
  },
  discountText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.white,
    letterSpacing: 1,
  },

  name: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.black,
    marginBottom: 2,
  },

  stockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stock: { fontSize: 12, marginRight: 6 },
  stockIcon: { fontSize: 12 },
  heartIcon: { fontSize: 17, color: COLORS.red },

  infoSeller: { display: 'flex', flexDirection: 'row' },
  info: { width: '65%' },
  seller: { width: '35%' },
  sellerImage: {
    width: '100%',
    height: 50,
    resizeMode: 'contain',
  },
});

export default styles;
