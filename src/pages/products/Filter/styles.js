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
  about: {
    marginBottom: 10,
    padding: 16,
  },
  itemsContainer: {
    padding: 16,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'center',
  },
});

export default styles;
