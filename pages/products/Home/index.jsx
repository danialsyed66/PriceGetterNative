import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { Items } from '../../../database/Database';
import { Carousel } from '../../../components';

const Home = () => {
  const navigation = useNavigation();

  const [products, setProducts] = useState([]);
  const [accessories, setAccessories] = useState([]);

  const getData = () => {
    setProducts([]);
    setAccessories([]);
    Items.forEach(item => {
      if (item.category === 'accessory')
        return setAccessories(accessories => [...accessories, item]);

      setProducts(products => [...products, item]);
    });
  };

  useEffect(() => {
    navigation.addListener('focus', getData);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.about}>
          <Text style={styles.aboutTitle}>Hi-Fi Shop & Service</Text>
          <Text style={styles.aboutSubtitle}>
            {
              'Audio on Rustaveli Ave 57\nThis shop offers both products and services'
            }
          </Text>
        </View>

        <Carousel title="Products" count={products.length} items={products} />
        <Carousel
          title="Accessories"
          count={accessories.length}
          items={accessories}
        />
      </ScrollView>
    </View>
  );
};

export default Home;
