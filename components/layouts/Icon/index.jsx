import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

const Product = ({ element: Element, name, type, onPress }) => {
  const style = type === 'primary' ? styles.icon : styles.secondaryIcon;
  return (
    <TouchableOpacity onPress={onPress}>
      <Element style={style} name={name} />
    </TouchableOpacity>
  );
};

export default Product;
