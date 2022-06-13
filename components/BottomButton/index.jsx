import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const BottomButton = ({ onPress, text }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.buttonTouch}>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButton;
