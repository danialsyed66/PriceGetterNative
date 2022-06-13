import { StyleSheet, Dimensions } from 'react-native';

import { COLORS } from '../../../utils';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.backgroundLight,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  imageView: {
    width: Dimensions.get('window').width,
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  barsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  bar: {
    width: '16%',
    height: 2.4,
    backgroundColor: COLORS.black,
    marginHorizontal: 4,
    borderRadius: 100,
  },
});

export default styles;
