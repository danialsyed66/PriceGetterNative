import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Feather } from 'react-native-vector-icons';

import styles from './styles';
import { COLORS } from '../../../utils';
import TextButton from '../../TextButton';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../../../redux/actions/filterActions';

const FormInput = ({
  containerStyle,
  placeholder,
  inputStyle,
  secureTextEntry,
  keyboardType = 'default',
  autoCompleteType = 'off',
  autoCapitalize = 'none',
}) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const { query: globalQuery } = useSelector(state => state.filters);

  const [query, setQuery] = useState(globalQuery);

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
          onChangeText={text => setQuery(text)}
        />
      </View>

      <TouchableOpacity
        style={styles.filterContainer}
        onPress={() => {
          //Open Filters Model
          navigate('Filter');
        }}
      >
        {/* <Image source={ICONS.filter} style={styles.filterImage} /> */}
        <Feather name="sliders" style={styles.filterImage} />
      </TouchableOpacity>

      <TextButton
        text="Search"
        containerStyle={styles.searchContainer}
        touchStyle={styles.searchTouch}
        onPress={() => {
          dispatch(setFilters({ query }));
          navigate('Filter', { nav: true });
        }}
      />
    </View>
  );
};

export default FormInput;
