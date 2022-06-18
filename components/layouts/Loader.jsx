import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Loader = () => (
  <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);

export default Loader;
