import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, AntDesign } from 'react-native-vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import styles from './styles';
import Icon from '../../Icon';
import { useNavigation } from '@react-navigation/native';
import { logout } from '../../../redux/actions/authActions';

const Nav = ({ title }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { isAuth } = useSelector(state => state.auth);

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
          {isAuth && (
            <Icon
              element={AntDesign}
              name="logout"
              onPress={() => {
                dispatch(logout());

                navigation.navigate('Home');
              }}
            />
          )}
        </View>
      </View>
    </>
  );
};

export default Nav;
