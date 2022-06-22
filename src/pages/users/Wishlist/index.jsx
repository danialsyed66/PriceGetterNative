import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import { Header, Loader, Nav, ProductList } from '../../../components';
import { loadUser } from '../../../redux/actions/authActions';
import { getFavourites } from '../../../redux/actions/userActions';
import { HANDLE_FAVOURITE_RESET } from '../../../redux/consts';
import { useAuthRedirect } from '../../../hooks';

const Wishlist = () => {
  useAuthRedirect();

  const dispatch = useDispatch();

  const { favourites, gettingFavourites } = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getFavourites());

    return () => {
      dispatch(loadUser());
      dispatch({ type: HANDLE_FAVOURITE_RESET });
    };
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Header title="Wishlist" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.cartContainer}>
          {gettingFavourites ? (
            <Loader />
          ) : (
            <ProductList
              forFavourites
              products={favourites}
              message="Your wishlist is empty.."
            />
          )}
        </View>
      </ScrollView>

      <Nav />
    </View>
  );
};

export default Wishlist;
