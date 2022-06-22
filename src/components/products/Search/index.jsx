import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons';

import styles from './styles';
import { COLORS } from '../../../utils';
import TextButton from '../../TextButton';

const FormInput = ({
  containerStyle,
  placeholder,
  inputStyle,
  onChange,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.inputContainer}>
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
      </View>

      <TouchableOpacity
        style={styles.filterContainer}
        onPress={() => {
          //Open Filters Model
        }}
      >
        {/* <Image source={ICONS.filter} style={styles.filterImage} /> */}
        <Feather name="sliders" style={styles.filterImage} />
      </TouchableOpacity>

      <TextButton
        text="Search"
        containerStyle={styles.searchContainer}
        touchStyle={styles.searchTouch}
      />
    </View>
  );
};

export default FormInput;
