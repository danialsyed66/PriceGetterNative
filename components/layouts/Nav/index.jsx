import React from 'react';
import { View, Text } from 'react-native';
import { Entypo, AntDesign } from 'react-native-vector-icons';

import styles from './styles';
import Icon from '../Icon';
import { useNavigation } from '@react-navigation/native';

const Nav = () => {
  const navigation = useNavigation();

  return (
    <>
      <View style={{ height: '10%' }}></View>
      <View style={styles.container}>
        <View style={styles.icons}>
          <Icon
            element={AntDesign}
            name="home"
            onPress={() => navigation.navigate('Home')}
          />
          <Icon element={Entypo} name="shopping-bag" type="primary" />
          <Icon
            element={AntDesign}
            name="shoppingcart"
            onPress={() => navigation.navigate('Cart')}
          />
          <Icon element={AntDesign} name="login" type="primary" />
          {/* <Icon element={MaterialCommunityIcons} name="account" type="primary" /> */}
          {/* <Icon element={AntDesign} name="logout" type="primary" /> */}
        </View>
      </View>
    </>
  );
};

export default Nav;
