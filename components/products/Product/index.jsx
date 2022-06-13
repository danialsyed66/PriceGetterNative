import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { COLORS } from '../../../utils';

import styles from './styles';

const Product = ({
  product: {
    id,
    category,
    productName,
    productPrice,
    description,
    isOff,
    offPercentage,
    productImage,
    isAvailable,
    productImageList,
  },
}) => {
  const color = isAvailable ? COLORS.green : COLORS.red;
  const stock = isAvailable ? ' Available' : ' Unavailable';

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Product Details', { id })}
    >
      <View style={styles.imageContainer}>
        {isOff && (
          <View style={styles.discount}>
            <Text style={styles.discountText}>{offPercentage}%</Text>
          </View>
        )}
        <Image style={styles.image} source={productImage} />
      </View>

      <Text style={styles.name}>{productName}</Text>

      <View style={styles.stockContainer}>
        <FontAwesome style={[styles.stockIcon, { color }]} name="circle" />
        <Text style={[styles.stock, { color }]}>{stock}</Text>
      </View>
      <Text style={styles.price}>Rs. {productPrice}</Text>
    </TouchableOpacity>
  );
};

export default Product;
