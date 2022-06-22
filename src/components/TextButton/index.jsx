import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const BottomButton = ({
  onPress,
  text,
  containerStyleAdd,
  touchStyleAdd,
  textStyleAdd,
  containerStyle,
  touchStyle,
  textStyle,
}) => {
  return (
    <View
      style={
        containerStyle === null
          ? null
          : containerStyle || [styles.container, containerStyleAdd]
      }
    >
      <TouchableOpacity
        onPress={onPress}
        style={
          touchStyle === null
            ? null
            : touchStyle || [styles.touch, touchStyleAdd]
        }
      >
        <Text
          style={
            textStyle === null ? null : textStyle || [styles.text, textStyleAdd]
          }
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomButton;
