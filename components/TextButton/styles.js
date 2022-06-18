import { StyleSheet } from 'react-native';

import { COLORS } from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: '8%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touch: {
    width: '86%',
    height: '90%',
    backgroundColor: COLORS.green,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 1,
    color: COLORS.white,
    textTransform: 'uppercase',
  },
});

export default styles;
