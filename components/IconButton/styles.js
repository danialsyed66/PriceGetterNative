import { StyleSheet } from 'react-native';

import { COLORS } from '../../utils';

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTouch: {
    width: '86%',
    height: '90%',
    backgroundColor: COLORS.backgroundLight,
    borderWidth: 2,
    borderColor: COLORS.green,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.green,
  },
  icon: {
    fontSize: 16,
    color: COLORS.green,
  },
});

export default styles;
