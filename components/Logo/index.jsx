import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import styles from './styles';
import PriceGetter from '../../assets/PriceGetter.png';
import { useNavigation } from '@react-navigation/native';

const Logo = ({ touchStyles, source }) => {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={touchStyles || styles.touch}
        onPress={() => navigate('Home')}
      >
        <Image
          style={[
            styles.logo,
            source
              ? {
                  borderRadius: 100,
                }
              : {},
          ]}
          source={source || PriceGetter}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Logo;
