import asyncStorage from '@react-native-async-storage/async-storage';

import { INIT } from '../consts';

export const init = () => async dispatch => {
  try {
    const data = await asyncStorage.multiGet(['cartItems', 'shippingInfo']);

    const cartItems = JSON.parse(data[0][1] || '[]');
    const shippingInfo = JSON.parse(data[1][1] || '{}');

    dispatch({
      type: INIT,
      payload: { cartItems, shippingInfo },
    });
  } catch (error) {
    dispatch({
      type: INIT,
      payload: { cartItems: [], shippingInfo: {} },
    });
  }
};
