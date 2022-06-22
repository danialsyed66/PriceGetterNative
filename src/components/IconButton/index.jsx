import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const BottomButton = ({ onPress, text, Icon, name }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.buttonTouch}>
        <Icon name={name} style={styles.icon} />
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButton;
