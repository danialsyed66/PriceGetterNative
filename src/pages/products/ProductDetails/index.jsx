import React, { useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Entypo, AntDesign } from 'react-native-vector-icons';
import asyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import {
  ImageCarousel,
  BottomButton,
  Header,
  Nav,
  Loader,
  Carousel,
  ProductList,
} from '../../../components';
import { alert, isImage, openUrl } from '../../../utils';
import { addToCart } from './../../../redux/actions/cartActions';
import { getProductDetails } from '../../../redux/actions/productActions';

const ProductDetails = () => {
  const { id } = useRoute().params;
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const { loading, product, similar, same } = useSelector(
    state => state.productDetails
  );

  const {
    _id,
    name,
    price,
    description,
    images,
    seller,
    stock,
    url,
    rating,
    category,
    noOfReviews,
    // category,
    // createdAt,
    oldPrice,
    // discount,
    pricegetter,
  } = product;

  const handleCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));

    navigate('Cart');
  };

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {loading || !product ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <Header
            title={
              name ? name?.replace(/^(.{15}[^\s]*).*/, '$1') : 'Product Details'
            }
          />

          <StatusBar style={styles.statusBar} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <ImageCarousel items={images} />
            <View style={styles.scrollViewContainer}>
              <View style={styles.cartContainer}>
                <Entypo style={styles.cartIcon} name="shopping-cart" />
                <Text style={styles.cartText}>Shopping</Text>
              </View>

              <View style={styles.title}>
                <Text style={styles.titleText}>{name}</Text>
                <TouchableOpacity
                  style={styles.seller}
                  onPress={() =>
                    openUrl(
                      url || `https://price-getter.netlify.app/product/${_id}`
                    )
                  }
                >
                  {isImage(seller?.logo?.url) && (
                    <Image
                      style={styles.sellerImage}
                      source={{ uri: seller?.logo?.url }}
                    />
                  )}
                </TouchableOpacity>
              </View>

              <Text style={styles.description}>{description}</Text>

              <View style={styles.priceRatingContainer}>
                {oldPrice ? (
                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>Rs. {price} </Text>
                    <Text style={styles.priceTextCrossed}>Rs. {oldPrice}</Text>
                  </View>
                ) : (
                  <Text style={styles.priceText}>Rs. {price} </Text>
                )}
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>
                    {rating}{' '}
                    <AntDesign
                      style={styles.ratingIcon}
                      name={rating == 0 ? 'staro' : 'star'}
                    />
                  </Text>
                  <Text
                    style={styles.priceTextLight}
                  >{`  (${noOfReviews})`}</Text>
                </View>
              </View>
              <View style={styles.sameContainer}>
                <Text style={styles.title2Text}>
                  Same Product on Various Sites
                </Text>
                <ProductList
                  products={same?.same}
                  message="
                    This product is not on other sites."
                />
              </View>
              <View style={styles.sameContainer}>
                <Text style={styles.title2Text}>Related Products</Text>
                <Carousel renderFor="category" items={similar?.similar} />
              </View>
            </View>
            {pricegetter && <View style={{ marginBottom: 80 }}></View>}
          </ScrollView>

          {pricegetter && (
            <BottomButton
              onPress={() => (stock > 0 ? handleCart() : null)}
              text={stock > 0 ? 'Add to cart' : 'Not Avialable'}
            />
          )}

          <Nav />
        </View>
      )}
    </>
  );
};

export default ProductDetails;
