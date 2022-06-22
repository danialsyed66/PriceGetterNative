import React from 'react';
import { View } from 'react-native';
import { AntDesign, Fontisto, Entypo } from 'react-native-vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import styles from './styles';
import { COLORS } from '../../../utils';
import Icon from '../../Icon';
import { useKeyboardDetector } from '../../../hooks';
import { useSelector } from 'react-redux';

const Nav = () => {
  const { navigate } = useNavigation();
  const { name: routeName } = useRoute();

  const { isAuth } = useSelector(state => state.auth);

  const [isKeyboardVisible] = useKeyboardDetector(false);

  const active = {
    color: COLORS.green,
    borderColor: COLORS.green,
    borderWidth: 1,
  };

  return (
    <>
      {isKeyboardVisible ? null : (
        <>
          <View style={{ height: '8%' }}></View>
          <View style={styles.container}>
            <View style={styles.icons}>
              <Icon
                element={AntDesign}
                name="home"
                onPress={() => navigate('Home')}
                style={
                  ['Home', 'Product Details'].includes(routeName) && active
                }
              />
              <Icon
                element={Fontisto}
                name="shopping-sale"
                type="primary"
                onPress={() => navigate('Filter')}
                style={['Filter'].includes(routeName) && active}
              />
              <Icon
                element={AntDesign}
                name="shoppingcart"
                onPress={() => navigate('Cart')}
                style={['Cart', 'Payment'].includes(routeName) && active}
              />
              {isAuth ? (
                <Icon
                  element={Entypo}
                  name="user"
                  type="primary"
                  onPress={() => navigate('Profile')}
                  style={['Profile', 'Wishlist'].includes(routeName) && active}
                />
              ) : (
                <Icon
                  element={AntDesign}
                  name="login"
                  type="primary"
                  onPress={() => navigate('Sign In')}
                  style={['Sign In', 'Sign Up'].includes(routeName) && active}
                />
              )}
              {/* <Icon element={AntDesign} name="logout" type="primary" /> */}
            </View>
          </View>
        </>
      )}
    </>
  );
};

export default Nav;
