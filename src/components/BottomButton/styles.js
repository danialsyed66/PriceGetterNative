import { StyleSheet } from 'react-native';

import { COLORS } from '../../utils';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: '9%',
    height: '8%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTouch: {
    width: '86%',
    height: '90%',
    backgroundColor: COLORS.green,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    color: COLORS.white,
    textTransform: 'uppercase',
  },
});

export default styles;
