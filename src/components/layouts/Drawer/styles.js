import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../../utils';

const styles = StyleSheet.create({
  container: {},
  icons: {
    width: '20%',
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    padding: 16,
  },
  drawerContainer: {
    width: '50%',
    height: Dimensions.get('window').height,
    backgroundColor: COLORS.backgroundLight,
    position: 'absolute',
    zIndex: 1,
  },
  drawerOverlay: {
    width: '50%',
    height: Dimensions.get('window').height,
    backgroundColor: COLORS.backgroundDark,
    opacity: 0.5,
    right: 0,
    position: 'absolute',
    zIndex: 1,
  },
  drawerItem: {
    padding: 10,
    margin: 15,
  },
});

export default styles;
