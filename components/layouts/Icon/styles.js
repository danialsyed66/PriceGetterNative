import { StyleSheet } from 'react-native';

import { COLORS } from '../../../utils';

const styles = StyleSheet.create({
  icon: {
    fontSize: 18,
    padding: 12,
    borderRadius: 10,
    color: COLORS.backgroundMedium,
    backgroundColor: COLORS.backgroundLight,
  },
  secondaryIcon: {
    fontSize: 18,
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    color: COLORS.backgroundMedium,
    borderColor: COLORS.backgroundLight,
  },
});

export default styles;
