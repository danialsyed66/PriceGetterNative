import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home, ProductDetails, Cart, Payment } from './pages';

import { Nav } from './components';
import { View } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Home'} component={Home} />
        <Stack.Screen name={'Product Details'} component={ProductDetails} />
        <Stack.Screen name={'Cart'} component={Cart} />
        <Stack.Screen name={'Payment'} component={Payment} />
      </Stack.Navigator>
      <Nav />
    </NavigationContainer>
  );
}
