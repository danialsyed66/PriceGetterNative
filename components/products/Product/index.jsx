import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import { COLORS, isImage, openUrl } from '../../../utils';

import styles from './styles';

const Product = ({
  product: { _id, name, price, discount, images, stock, seller, url },
}) => {
  const isAvailable = stock === 'In Stock' || stock > 0;
  const color = isAvailable ? COLORS.green : COLORS.red;

  const { navigate } = useNavigation();

  images = images?.filter(img => isImage(img.url));

  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigate('Product Details', { id: _id })}
    >
      <View style={styles.imageContainer}>
        {discount > 0 && (
          <View style={styles.discount}>
            <Text style={styles.discountText}>{Math.round(discount)}%</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.heartContainer}
          onPress={handleFavourite}
        >
          <FontAwesome
            style={styles.heartIcon}
            name={isFavourite ? 'heart' : 'heart-o'}
          />
        </TouchableOpacity>

        {images?.length > 0 && images?.[0]?.url && (
          <Image style={styles.image} source={{ uri: images?.[0]?.url }} />
        )}
      </View>

      <Text style={styles.name}>{name?.replace(/^(.{15}[^\s]*).*/, '$1')}</Text>

      <View style={styles.infoSeller}>
        <View style={styles.info}>
          <View style={styles.stockContainer}>
            <FontAwesome style={[styles.stockIcon, { color }]} name="circle" />
            <Text style={[styles.stock, { color }]}>
              {isAvailable ? ' In Stock' : ' Out of Stock'}
            </Text>
          </View>

          <Text style={styles.price}>Rs. {price}</Text>
        </View>

        <TouchableOpacity
          style={styles.seller}
          onPress={() =>
            openUrl(url || `https://price-getter.netlify.app/product/${_id}`)
          }
        >
          {isImage(seller?.logo?.url) && (
            <Image
              style={styles.sellerImage}
              source={{ uri: seller?.logo?.url }}
            />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default Product;
