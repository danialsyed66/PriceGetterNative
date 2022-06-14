import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { COLORS, isImage } from '../../../utils';

import styles from './styles';

const Product = ({
  product: { _id, name, price, discount, images, stock },
}) => {
  const isAvailable = stock === 'In Stock' || stock > 0;
  const color = isAvailable ? COLORS.green : COLORS.red;

  const navigation = useNavigation();

  images = images?.filter(img => isImage(img.url));

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Product Details', { id: _id })}
    >
      <View style={styles.imageContainer}>
        {discount > 0 && (
          <View style={styles.discount}>
            <Text style={styles.discountText}>{Math.round(discount)}%</Text>
          </View>
        )}
        {images?.length > 0 && images?.[0]?.url && (
          <Image style={styles.image} source={{ uri: images?.[0]?.url }} />
        )}
      </View>

      <Text style={styles.name}>{name?.replace(/^(.{15}[^\s]*).*/, '$1')}</Text>

      <View style={styles.stockContainer}>
        <FontAwesome style={[styles.stockIcon, { color }]} name="circle" />
        <Text style={[styles.stock, { color }]}>
          {isAvailable ? ' In Stock' : ' Out of Stock'}
        </Text>
      </View>
      <Text style={styles.price}>Rs. {price}</Text>
    </TouchableOpacity>
  );
};

export default Product;
