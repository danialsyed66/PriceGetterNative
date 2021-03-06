import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import { Feather } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import styles from './styles';
import icons from './icons';
import Icon from '../../Icon';
import { setFilters } from '../../../redux/actions/filterActions';

const Category = ({ setCategory }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const handleNavigate = category => {
    if (setCategory) {
      return dispatch(setFilters({ categories: [category] }));
    }

    dispatch(setFilters({ categories: [category] }));
    navigate('Filter', { nav: true });
  };

  const [more, setMore] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titleText}>Categories</Text>

        <View style={styles.contentContainer}>
          {icons.map(({ src, text, val }, index) => {
            if (!more && index > 2) return null;

            return (
              <TouchableOpacity
                style={styles.itemContainer}
                key={index}
                onPress={() => handleNavigate(val)}
              >
                <Image source={src} style={styles.image} />

                <Text style={styles.text}>{text}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        <View style={styles.more}>
          <View style={styles.moreIcons}>
            <View style={styles.ruler}></View>
            <Icon
              element={Feather}
              name={`chevrons-${more ? 'up' : 'down'}`}
              onPress={() => setMore(!more)}
            />
            <View style={styles.ruler}></View>
          </View>
        </View>
      </View>
    </>
  );
};

export default Category;
