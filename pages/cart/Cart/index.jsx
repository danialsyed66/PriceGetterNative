import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import asyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import styles from './styles';
import { Items } from '../../../database/Database';
import { alert } from '../../../utils';
import { BottomButton, Header, Nav } from '../../../components';
import { useAuthRedirect, useNavigetionListener } from '../../../hooks';

const Cart = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // useAuthRedirect();

  const getData = async () => {
    try {
      const cartString = await asyncStorage.getItem('cartItems');
      const cart = JSON.parse(cartString || '[]');

      setProducts(Items.filter(item => cart.includes(item.id)));
    } catch (err) {
      console.log(err);
    }
  };

  const removeItemFromCart = async id => {
    try {
      const cartString = await asyncStorage.getItem('cartItems');
      const cart = JSON.parse(cartString || '[]');

      await asyncStorage.setItem(
        'cartItems',
        JSON.stringify(cart.filter(val => val !== id))
      );

      // alert('Success', 'Product removed from cart.');

      // navigation.navigate('Home');

      getData();
    } catch (err) {
      console.log(err);
    }
  };

  const checkOut = async () => {
    try {
      await asyncStorage.removeItem('cartItems');

      alert('Success', 'Items will be Deliverd SOON!');

      navigation.navigate('Home');
    } catch (err) {
      console.log(err);
      alert('Error', 'Could not place your order.');
    }
  };

  const renderCart = () =>
    products?.map(
      ({
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
      }) => (
        <TouchableOpacity
          key={id}
          style={styles.productContainer}
          onPress={() => navigation.navigate('Product Details', { id })}
        >
          <View style={styles.imageContainer}>
            <Image source={productImage} style={styles.image} />
          </View>

          <View style={styles.contentContainer}>
            <View>
              <Text style={styles.nameText}>{productName}</Text>
            </View>

            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>Rs. {productPrice}</Text>
            </View>

            <View style={styles.actionsContainer}>
              <View style={styles.quantityActions}>
                <TouchableOpacity style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name="minus"
                    style={styles.icon}
                    onPress={() => setQuantity(quantity - 1)}
                  />
                </TouchableOpacity>
                <Text style={styles.quantityText}>{quantity}</Text>
                <TouchableOpacity style={styles.iconContainer}>
                  <MaterialCommunityIcons
                    name="plus"
                    style={styles.icon}
                    onPress={() => setQuantity(quantity + 1)}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => removeItemFromCart(id)}>
                <MaterialCommunityIcons
                  name="delete-outline"
                  style={styles.deleteIcon}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      )
    );

  useEffect(() => {
    setTotal(products.reduce((prev, curr) => (prev += curr.productPrice), 0));
  }, [products]);

  useNavigetionListener(getData);

  return (
    <View style={styles.container}>
      <Header title="Cart" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Order Details</Text>
        <View style={styles.cartContainer}>{renderCart()}</View>

        <View>
          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Delivery Location</Text>
            <View style={styles.infoContent}>
              <View style={styles.infoContentText}>
                <View style={styles.infoIconContainer}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    style={styles.deliveryIcon}
                  />
                </View>
                <View>
                  <Text style={styles.infoText1}>2 Petre Melikishvili St.</Text>
                  <Text style={styles.infoText2}>0162, Tbilisi</Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={styles.nextIconContainer}
              />
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>Payment Method</Text>
            <View style={styles.infoContent}>
              <View style={styles.infoContentText}>
                <View style={styles.infoIconContainer}>
                  <Text style={styles.paymentIconText}>VISA</Text>
                </View>
                <View>
                  <Text style={styles.infoText1}>Visa Classic</Text>
                  <Text style={styles.infoText2}>****-9092</Text>
                </View>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                style={styles.nextIconContainer}
              />
            </View>
          </View>

          <View style={styles.orderContainer}>
            <Text style={styles.infoTitle}>Order Info</Text>
            <View style={styles.orderContent}>
              <Text style={styles.orderInfoTitle}>Subtotal</Text>
              <Text style={styles.orderInfoText}>Rs. {total}</Text>
            </View>
            <View style={styles.shippingContainer}>
              <Text style={styles.orderInfoTitle}>Shipping Tax</Text>
              <Text style={styles.orderInfoText}>Rs. {total / 20}</Text>
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.orderInfoTitle}>Total</Text>
              <Text style={styles.total}>Rs. {total + total / 20}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <BottomButton
        onPress={() => (total !== 0 ? checkOut() : null)}
        text={`CHECKOUT (Rs. ${total})`}
      />

      <Nav />
    </View>
  );
};

export default Cart;
