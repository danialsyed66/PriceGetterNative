import React from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './styles';
import {
  Carousel,
  Category,
  Loader,
  Logo,
  Nav,
  Search,
} from '../../../components';

const Home = () => {
  const { home, loading } = useSelector(state => state.home);

  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Logo />

        <View style={styles.about}>
          <Text style={styles.aboutTitle}>
            Let's find and compare prices accross different E-commerce Stores
          </Text>
          <Search />
        </View>

        <Category />

        {loading || !home?.categories ? (
          <Loader />
        ) : (
          <>
            {home?.recommended && (
              <Carousel
                title="Recommended for you!"
                renderFor="recommended"
                items={home?.recommended?.recommended}
              />
            )}

            <Text style={styles.titleText}>Products by Categories</Text>

            <Carousel
              title="Escape the real world with a Book!"
              renderFor="category"
              items={home?.recommended?.recommended}
              condition={home?.categories?.food?.condition}
            />
            <Carousel
              title="Escape the real world with a Book!"
              renderFor="category"
              items={home?.categories?.books?.value}
              condition={home?.categories?.books?.condition}
            />
            <Carousel
              title="Food and Refreshments!"
              renderFor="category"
              items={home?.categories?.food?.value}
              condition={home?.categories?.food?.condition}
            />
            <Carousel
              title="Clothes and Wears!"
              renderFor="category"
              items={home?.categories?.clothes?.value}
              condition={home?.categories?.clothes?.condition}
            />
            <Carousel
              title="Cameras and Lens!"
              renderFor="category"
              items={home?.categories?.cameras?.value}
              condition={home?.categories?.cameras?.condition}
            />
            <Carousel
              title="New Laptops & Computers!"
              renderFor="category"
              items={home?.categories?.laptops?.value}
              condition={home?.categories?.laptops?.condition}
            />
            <Carousel
              title="Phone Offers!"
              renderFor="category"
              items={home?.categories?.smartPhones?.value}
              condition={home?.categories?.smartPhones?.condition}
            />
            <Carousel
              title="Dive into Sports!"
              renderFor="category"
              items={home?.categories?.sports?.value}
              condition={home?.categories?.sports?.condition}
            />
            <Carousel
              title="Household Necessities!"
              renderFor="category"
              items={home?.categories?.home?.value}
              condition={home?.categories?.home?.condition}
            />
            <Carousel
              title="Accessories for you!"
              renderFor="category"
              items={home?.categories?.accessories?.value}
              condition={home?.categories?.accessories?.condition}
            />
            <Carousel
              title="Electronics"
              renderFor="category"
              items={home?.categories?.electronics?.value}
              condition={home?.categories?.electronics?.condition}
            />
            <Carousel
              title="Take a step into the wild!"
              renderFor="category"
              items={home?.categories?.outdoor?.value}
              condition={home?.categories?.outdoor?.condition}
            />
            <Carousel
              title="Best Headphones!"
              renderFor="category"
              items={home?.categories?.headphones?.value}
              condition={home?.categories?.headphones?.condition}
            />
            {/* <hr /> */}
            <Text style={styles.titleText}>Products by Various Sellers</Text>
            <Carousel
              title="By Daraz"
              renderFor="seller"
              items={home?.sellers?.daraz?.value}
              condition={home?.sellers?.daraz?.condition}
            />
            <Carousel
              title="By Yayvo"
              renderFor="seller"
              items={home?.sellers?.yayvo?.value}
              condition={home?.sellers?.yayvo?.condition}
            />
            <Carousel
              title="By iBucket"
              renderFor="seller"
              items={home?.sellers?.iBucket?.value}
              condition={home?.sellers?.iBucket?.condition}
            />
            <Carousel
              title="By Goto"
              renderFor="seller"
              items={home?.sellers?.goto?.value}
              condition={home?.sellers?.goto?.condition}
            />
          </>
        )}
      </ScrollView>

      <Nav />
    </View>
  );
};

export default Home;
