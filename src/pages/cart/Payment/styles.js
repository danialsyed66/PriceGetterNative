import { StyleSheet } from 'react-native';

import { COLORS } from '../../../utils';

const styles = StyleSheet.create({
  container: { width: '100%', height: '100%', backgroundColor: COLORS.white },

  title: {
    color: COLORS.black,
    fontSize: 20,
    fontWeight: '500',
    letterSpacing: 1,
    paddingTop: 20,
    paddingLeft: 16,
    marginBottom: 10,
  },

  infoContainer: {
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  infoTitle: {
    fontSize: 16,
    color: COLORS.black,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 20,
  },
  infoContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContentText: {
    flexDirection: 'row',
    width: '80%',
    alignItems: 'center',
  },
  infoText1: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '500',
  },
  infoText2: {
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '400',
    lineHeight: 20,
    opacity: 0.5,
  },
  infoIconContainer: {
    color: COLORS.blue,
    backgroundColor: COLORS.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 10,
    marginRight: 18,
  },
  nextIconContainer: { fontSize: 22, color: COLORS.black },
  deliveryIcon: {
    fontSize: 18,
    color: COLORS.blue,
  },
  paymentIconText: {
    fontSize: 10,
    fontWeight: '900',
    color: COLORS.blue,
    letterSpacing: 1,
  },

  orderContainer: {
    paddingHorizontal: 16,
    marginVertical: 10,
    marginBottom: 60,
    paddingBottom: 15,
    borderBottomColor: COLORS.backgroundLight,
    borderBottomWidth: 1,
    borderRadius: 10,
  },
  orderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  orderInfoTitle: {
    fontSize: 12,
    fontWeight: '400',
    maxWidth: '80%',
    color: COLORS.black,
    opacity: 0.5,
  },
  orderInfoText: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.black,
    opacity: 0.8,
  },
  total: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.black,
  },
  shippingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },

  card: {
    backgroundColor: '#efefefef',
  },
  cardContainer: {
    height: 50,
    // marginVertical: 30,
  },
});

export default styles;
