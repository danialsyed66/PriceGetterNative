import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

import styles from './styles';
import Icon from '../../Icon';
import { useNavigation } from '@react-navigation/native';

const Nav = ({ title }) => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ height: '8%' }}></View>
      <View style={styles.container}>
        <View style={styles.icons}>
          <Icon
            element={Ionicons}
            name="return-up-back-outline"
            type="primary"
            onPress={() => navigation.goBack()}
          />
          <View style={styles.title}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default Nav;
