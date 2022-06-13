import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Product from '../Product';

const Carousel = ({ title, count, items }) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.itemCount}>{count}</Text>
        </View>
        <Text style={styles.more}>See All</Text>
      </View>

      <View style={styles.itemsContainer}>
        {items.map((item, index) => (
          <Product product={item} key={index} />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
