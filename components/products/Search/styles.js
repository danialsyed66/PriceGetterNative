import { StyleSheet } from 'react-native';

import { images, FONTS, SIZES, COLORS } from '../../../utils';

const styles = StyleSheet.create({
  container: { flexDirection: 'row', justifyContent: 'center' },
  inputContainer: {
    height: 55,
    width: '63%',
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.base,
    borderBottomLeftRadius: SIZES.radius,
    borderTopLeftRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray2,
  },
  filterContainer: {
    height: 55,
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.base,
    padding: SIZES.base,
    backgroundColor: COLORS.lightGray2,
  },
  filterImage: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: SIZES.body2,
    color: COLORS.green,
  },
  searchContainer: {
    height: 55,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
    marginTop: SIZES.base,
    backgroundColor: COLORS.green,
  },

  input: { flex: 1 },
});

export default styles;
