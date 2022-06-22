import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
// import EvilIcons from 'react-native-vector-icons/EvilIcons';

// import Icon from '../../Icon';

import styles from './styles';

const DrawerCustom = () => {
  const [drawerShow, setDrawerShow] = useState(false);
  const { navigate } = useNavigation();

  return (
    <View>
      <View style={styles.icons}>
        {/* <TouchableOpacity onPress={() => setDrawerShow(!drawerShow)}>
          <EvilIcons
            name="navicon"
            style={{ border: 5, borderColor: '#C04345' }}
          />
        </TouchableOpacity> */}
        <Button title="nav" onPress={() => setDrawerShow(!drawerShow)} />
      </View>
      <TouchableOpacity
        style={[
          styles.drawerContainer,
          {
            display: drawerShow ? 'flex' : 'none',
          },
        ]}
        onPress={() => setDrawerShow(false)}
      >
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            setDrawerShow(false);
            navigate('Home');
          }}
        >
          <Text style={styles.drawerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            setDrawerShow(false);
            navigate('Home');
          }}
        >
          <Text style={styles.drawerText}>Product</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => {
            setDrawerShow(false);
            navigate('Cart');
          }}
        >
          <Text style={styles.drawerText}>Cart</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.drawerOverlay,
          {
            display: drawerShow ? 'flex' : 'none',
          },
        ]}
        onPress={() => setDrawerShow(false)}
      ></TouchableOpacity>
    </View>
  );
};

export default DrawerCustom;
