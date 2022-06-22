import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';

import {
  Home,
  ProductDetails,
  Cart,
  Payment,
  SignIn,
  SignUp,
  Profile,
} from './pages';
import { init } from './redux/actions/initAction';
import { getHome } from './redux/actions/homeActions';

const Stack = createNativeStackNavigator();

export default function App() {
  const dispatch = useDispatch();

  const { isAuth } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(init());
  }, []);

  useEffect(() => {
    dispatch(getHome());
  }, [isAuth]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Product Details'} component={ProductDetails} />
        <Stack.Screen name={'Cart'} component={Cart} />
        <Stack.Screen name={'Payment'} component={Payment} />
        <Stack.Screen name={'Sign In'} component={SignIn} />
        <Stack.Screen name={'Sign Up'} component={SignUp} />
        <Stack.Screen name={'Profile'} component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
