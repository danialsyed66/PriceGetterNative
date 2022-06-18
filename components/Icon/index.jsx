import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './styles';

const Product = ({
  element: Element,
  name,
  type,
  onPress,
  style: customStyle,
}) => {
  const style = type === 'primary' ? styles.icon : styles.secondaryIcon;
  return (
    <TouchableOpacity onPress={onPress}>
      <Element style={[style, customStyle]} name={name} />
    </TouchableOpacity>
  );
};

export default Product;
