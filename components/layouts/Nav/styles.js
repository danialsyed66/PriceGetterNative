import { StyleSheet } from 'react-native';

import { COLORS } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '10%',
    backgroundColor: COLORS.white,
    borderColor: COLORS.backgroundMedium,
    borderTopWidth: 1,
  },
  icons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // alignItems: 'center',
    padding: '4%',
  },
});

export default styles;
