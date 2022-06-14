import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import asyncStorage from '@react-native-async-storage/async-storage';

import styles from './styles';
import { Items } from '../../../database/Database';
import { ImageCarousel, BottomButton } from '../../../components';
import { alert } from '../../../utils';

const ProductDetails = () => {
  const { id } = useRoute().params;
  const navigation = useNavigation();

  const [product, setProduct] = useState({});

  const addToCart = async id => {
    try {
      const cartString = await asyncStorage.getItem('cartItems');
      const cart = JSON.parse(cartString || '[]');

      await asyncStorage.setItem(
        'cartItems',
        JSON.stringify([...new Set([...cart, id])])
      );

      // alert('Success', 'Product added to cart.');

      navigation.navigate('Cart');
    } catch (err) {
      console.log(err);
      alert('Error', 'Could not add to cart.');
    }
  };

  useEffect(() => {
    navigation.addListener('focus', () =>
      setProduct(Items.find(item => item.id === id))
    );
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageCarousel items={product?.productImageList} />
        <View style={styles.scrollViewContainer}>
          <View style={styles.cartContainer}>
            <Entypo style={styles.cartIcon} name="shopping-cart" />
            <Text style={styles.cartText}>Shopping</Text>
          </View>

          <View style={styles.title}>
            <Text style={styles.titleText}>{product?.productName}</Text>
            <Ionicons style={styles.titleIcon} name="link-outline" />
          </View>

          <Text style={styles.description}>{product?.description}</Text>

          <View style={styles.locationContainer}>
            <View style={styles.locationIconContainer}>
              <View style={styles.locationIconContainer2}>
                <Entypo style={styles.locationIcon} name="location-pin" />
              </View>
              <Text>Rustaveli Ave 57,{'\n'}17-001, Batume</Text>
            </View>
            <Entypo style={styles.rightIcon} name="chevron-right" />
          </View>

          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>Rs. {product.productPrice}</Text>
          </View>
        </View>
      </ScrollView>

      <BottomButton
        onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
        text={product.isAvailable ? 'Add to cart' : 'Not Avialable'}
      />
    </View>
  );
};

export default ProductDetails;
