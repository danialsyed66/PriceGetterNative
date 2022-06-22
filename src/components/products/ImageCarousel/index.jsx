import React from 'react';
import { View, FlatList, Image, Dimensions, Animated } from 'react-native';

import styles from './styles';

const Carousel = ({ items }) => {
  const width = Dimensions.get('window').width;
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  const renderImages = ({ item, index }) => (
    <View style={styles.imageView} key={index}>
      <Image style={styles.image} source={{ uri: item }} />
    </View>
  );

  return (
    <>
      {items?.length > 0 && (
        <View style={styles.container}>
          <FlatList
            data={items.map(img => img.url)}
            horizontal
            renderItem={renderImages}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
          />
          <View style={styles.barsContainer}>
            {items.map((_, index) => {
              const opacity = position.interpolate({
                inputRange: [index - 1, index, index + 1],
                outputRange: [0.2, 1, 0.2],
                extrapolate: 'clamp',
              });
              return (
                <Animated.View
                  style={[styles.bar, { opacity }]}
                  key={index}
                ></Animated.View>
              );
            })}
          </View>
        </View>
      )}
    </>
  );
};

export default Carousel;
