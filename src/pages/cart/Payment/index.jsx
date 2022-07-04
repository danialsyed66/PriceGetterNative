import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import {
  StripeProvider,
  CardField,
  useConfirmPayment,
} from '@stripe/stripe-react-native';
import asyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import axios from '../../../utils/axios';
import { BottomButton, Header, Loader, Nav } from '../../../components';
import { useAuthRedirect } from '../../../hooks';
import { alert } from '../../../utils';
import { createOrder } from '../../../redux/actions/orderActions';
import { init } from '../../../redux/actions/initAction';

const Payment = () => {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const { isAuth, user } = useSelector(state => state.auth);
  const { cartItems, shippingInfo } = useSelector(state => state.cart);

  const [stripeKey, setStripeKey] = useState('');
  const [totalUnits, setTotalUnits] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cardDetails, setCardDetails] = useState();

  const { confirmPayment, loading } = useConfirmPayment();

  const handlePayment = async () => {
    try {
      if (!cardDetails?.complete)
        return alert('Error', 'Please enter complete card details');

      const { data } = await axios.post('/api/v1/payment/process', {
        amount: Math.round(totalPrice * 100),
      });

      const { clientSecret } = data.data;

      const result = await confirmPayment(clientSecret, {
        type: 'Card',
        billing_details: {
          name: user.name,
          email: user.email,
        },
      });

      if (result.error) {
        alert('Error1', result.error.message);
        return;
      }

      if (result.paymentIntent.status === 'Succeeded') {
        const order = {
          orderItems: cartItems,
          shippingInfo,
          itemsPrice: totalPrice,
          // taxPrice: orderInfo?.tax,
          // shippingPrice: orderInfo?.shipping,
          totalPrice,
          paymentInfo: {
            id: result.paymentIntent.id,
            status: result.paymentIntent.status,
          },
        };

        dispatch(createOrder(order));

        alert('Success', 'Items will be Deliverd SOON!');

        await asyncStorage.removeItem('cartItems');
        // await asyncStorage.removeItem('shippingInfo');

        dispatch(init());

        navigate('Home');

        return;
      }

      alert('Error', 'There is some error while payment processing!');
    } catch (err) {
      if (document.getElementById('pay_btn'))
        document.getElementById('pay_btn').disabled = false;

      alert('Error', 'Failed to process payment');
      console.log(err);
      console.log(err?.response?.data?.message);
    }
  };

  useAuthRedirect();

  useEffect(() => {
    const unitsAndPrice = cartItems.reduce(
      (acc, cur) => [acc[0] + cur.quantity, acc[1] + cur.quantity * cur.price],
      [0, 0]
    );

    setTotalUnits(unitsAndPrice[0]);
    setTotalPrice(unitsAndPrice[1]);
  }, [cartItems]);

  useEffect(() => {
    const getStripeApiKey = async () => {
      try {
        const {
          data: { data },
        } = await axios.get('api/v1/payment/getStripeApiKey');

        setStripeKey(data.stripeApiKey);
      } catch (err) {
        console.log(err);
      }
    };

    if (isAuth) getStripeApiKey();
  }, [isAuth]);

  return (
    <StripeProvider publishableKey={stripeKey}>
      <View style={styles.container}>
        <Header title="Payment" />

        {loading ? (
          <Loader />
        ) : (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              <Text style={styles.title}>Order Details</Text>

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
                        <Text style={styles.infoText1}>
                          {shippingInfo?.address}, {shippingInfo?.city}
                        </Text>
                        <Text style={styles.infoText2}>
                          {shippingInfo?.postalCode}, {shippingInfo?.country}
                        </Text>
                      </View>
                    </View>
                    <MaterialCommunityIcons
                      name="chevron-right"
                      style={styles.nextIconContainer}
                    />
                  </View>
                </View>

                <View style={styles.infoContainer}>
                  <Text style={styles.infoTitle}>Payment</Text>
                  <CardField
                    postalCodeEnabled={false}
                    placeholder={{
                      number: '4242 4242 4242 4242',
                    }}
                    cardStyle={styles.card}
                    style={styles.cardContainer}
                    onCardChange={cardDetails => setCardDetails(cardDetails)}
                  />
                </View>

                <View style={styles.orderContainer}>
                  <Text style={styles.infoTitle}>Order Info</Text>
                  <View style={styles.orderContent}>
                    <Text style={styles.orderInfoTitle}>Units</Text>
                    <Text style={styles.orderInfoText}>
                      {totalUnits} {totalUnits === 1 ? '(Unit)' : '(Units)'}
                    </Text>
                  </View>
                  <View style={styles.infoContent}>
                    <Text style={styles.orderInfoTitle}>Total</Text>
                    <Text style={styles.total}>Rs. {totalPrice}</Text>
                  </View>
                </View>
              </View>
            </ScrollView>

            <BottomButton onPress={handlePayment} text="PAY" />
          </>
        )}

        <Nav />
      </View>
    </StripeProvider>
  );
};

export default Payment;
