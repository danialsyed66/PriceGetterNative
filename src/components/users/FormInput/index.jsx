import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';
import { COLORS } from '../../../utils';

const FormInput = ({
  containerStyle,
  inputContainerStyle,
  label,
  placeholder,
  inputStyle,
  prependComponent,
  appendComponent,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
  errorMsg = '',
}) => {
  return (
    <View style={containerStyle}>
      <View style={styles.lebelContainer}>
        <Text style={styles.lebel}>{label}</Text>
        <Text style={styles.errorMsg}>{errorMsg}</Text>
      </View>

      <View style={[styles.inputContainer, inputContainerStyle]}>
        {prependComponent}

        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          onChangeText={text => onChange(text)}
        />

        {appendComponent}
      </View>
    </View>
  );
};

export default FormInput;
