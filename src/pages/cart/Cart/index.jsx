import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useSelector } from 'react-redux';

import styles from './styles';
import { alert } from '../../../utils';
import { BottomButton, Header, Nav, ProductList } from '../../../components';

const Cart = () => {
  const navigation = useNavigation();

  const { cartItems } = useSelector(state => state.cart);

  const [totalUnits, setTotalUnits] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const unitsAndPrice = cartItems.reduce(
      (acc, cur) => [acc[0] + cur.quantity, acc[1] + cur.quantity * cur.price],
      [0, 0]
    );

    setTotalUnits(unitsAndPrice[0]);
    setTotalPrice(unitsAndPrice[1]);
  }, [cartItems]);

  const checkOut = async () => {
    try {
      // await asyncStorage.removeItem('cartItems');

      // alert('Success', 'Items will be Deliverd SOON!');

      navigation.navigate('Shipping Info');
    } catch (err) {
      console.log(err);
      alert('Error', 'Could not place your order.');
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Cart" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Order Details</Text>
        <View style={styles.cartContainer}>
          <ProductList
            forCart
            products={cartItems}
            message="Your cart is empty."
          />
        </View>

        <View>
          {/* <View style={styles.infoContainer}>
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
          </View> */}

          <View style={styles.orderContainer}>
            <Text style={styles.infoTitle}>Order Info</Text>
            <View style={styles.orderContent}>
              <Text style={styles.orderInfoTitle}>Units</Text>
              <Text style={styles.orderInfoText}>
                {totalUnits} {totalUnits === 1 ? '(Unit)' : '(Units)'}
              </Text>
            </View>
            {/* <View style={styles.shippingContainer}>
              <Text style={styles.orderInfoTitle}>Shipping Tax</Text>
              <Text style={styles.orderInfoText}>Rs. {totalPrice / 20}</Text>
            </View> */}
            <View style={styles.infoContent}>
              <Text style={styles.orderInfoTitle}>Total</Text>
              <Text style={styles.total}>
                {/* Rs. {totalPrice + totalPrice / 20} */}
                Rs. {totalPrice}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <BottomButton
        onPress={() => (totalPrice !== 0 ? checkOut() : null)}
        text={`CHECKOUT (Rs. ${totalPrice})`}
      />

      <Nav />
    </View>
  );
};

export default Cart;
