import asyncStorage from '@react-native-async-storage/async-storage';

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART,
  SAVE_SHIPPING_INFO,
} from '../consts';

export const addToCart = product => async (dispatch, getState) => {
  dispatch({
    type: ADD_TO_CART,
    payload: product,
  });

  await asyncStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cart.cartItems)
  );
};

export const removeFromCart = id => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  await asyncStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cart.cartItems)
  );
};

export const updateCart = (id, quantity) => async (dispatch, getState) => {
  dispatch({
    type: UPDATE_CART,
    payload: { id, quantity },
  });

  await asyncStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cart.cartItems)
  );
};

export const saveShippingInfo = shippingInfo => async (dispatch, getState) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: shippingInfo,
  });

  await asyncStorage.setItem(
    'shippingInfo',
    JSON.stringify(getState().cart.shippingInfo)
  );
};
