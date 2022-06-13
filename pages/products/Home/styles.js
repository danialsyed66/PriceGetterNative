import { StyleSheet } from 'react-native';

import { COLORS } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: COLORS.white,
  },
  statusBar: {
    backgroundColor: COLORS.white,
    barStyle: 'dark-content',
  },
  icons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  about: {
    marginBottom: 10,
    padding: 16,
  },
  aboutTitle: {
    fontSize: 26,
    fontWeight: '500',
    marginBottom: 10,
    color: COLORS.black,
    letterSpacing: 1,
  },
  aboutSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24,
    color: COLORS.black,
    letterSpacing: 1,
  },
});

export default styles;
