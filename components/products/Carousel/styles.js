import { StyleSheet } from 'react-native';

import { COLORS } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { flexDirection: 'row', alignItems: 'center' },
  titleText: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '500',
    letterSpacing: 1,
  },
  itemCount: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '400',
    opacity: 0.5,
    marginLeft: 10,
  },
  more: {
    fontSize: 14,
    color: COLORS.blue,
  },

  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default styles;
