import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Product from '../Product';

const Carousel = ({ title, items, renderFor, condition, observerCallBack }) => {
  if (!items) return null;

  return (
    <View style={styles.container}>
      {title && (
        <View style={styles.titleContainer}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{title}</Text>
            {/* <Text style={styles.itemCount}>{items?.length}</Text> */}
          </View>
          <Text style={styles.more}>See All</Text>
        </View>
      )}

      <View style={styles.itemsContainer}>
        {items?.map((item, index) => (
          <Product
            product={item}
            key={index}
            callbackRef={index === items?.length - 10 ? observerCallBack : null}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
