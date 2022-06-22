import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import {
  Carousel,
  Category,
  Loader,
  Nav,
  Search,
  Header,
} from '../../../components';
import { getProducts } from '../../../redux/actions/productActions';
import {
  setFilters,
  updateFilters,
} from '../../../redux/actions/filterActions';
import { useRoute } from '@react-navigation/native';

const Filter = () => {
  const dispatch = useDispatch();

  const { products, loading, totalProducts } = useSelector(
    state => state.products
  );

  const length = products?.length;

  const nav = useRef(useRoute().params?.categories);

  const {
    page,
    query,
    onSale,
    discount,
    price,
    leastRating,
    sellers,
    categories,
    sort,
    newReq,
  } = useSelector(state => state.filters);

  const [hasMore, setHasMore] = useState(true);

  const [sale, setSale] = useState(onSale);
  const [saleRange, setSaleRange] = useState(discount);
  const [currentPage, setCurrentPage] = useState(page);
  const [priceRange, setPriceRange] = useState(price);
  const [rating /*,setRating*/] = useState(leastRating);
  const [seller, setSeller] = useState(sellers);
  const [category, setCategory] = useState(categories);
  const [sortObj, setSortObj] = useState({ val: sort[0], order: sort[1] });

  const [priceRadio, setPriceRadio] = useState(0);
  const [saleRadio, setSaleRadio] = useState(0);
  const [sortRadioOrder, setSortRadioOrder] = useState(sortObj.order || 0);
  const [sortRadioVal, setSortRadioVal] = useState(sortObj.val || 0);
  // const [categoriesCheckBox, setCategoriesCheckBox] = useState(
  //   CATEGORIES.map(({ val }) => category.includes(val))
  // );
  // const [sellerCheckBox, setSellerCheckBox] = useState(
  //   SELLERS.map(({ val }) => seller.includes(val))
  // );

  const observer = useRef();

  useEffect(() => {
    if (length >= totalProducts) setHasMore(false);
  }, [length, totalProducts]);

  const observerCallBack = useCallback(
    node => {
      if (loading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && hasMore) {
          setCurrentPage(currentPage => currentPage + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    if (nav.current) {
      nav.current = false;
      return;
    }

    let sortArr = [];
    if (sortObj.val?.length && sortObj.order?.length)
      sortArr = [sortObj.val, sortObj.order];

    if (page !== currentPage) {
      return dispatch(
        updateFilters({
          page: currentPage,
          query,
          categories,
          price: priceRange,
          leastRating: rating,
          sellers: seller,
          sort: sortArr,
          onSale: sale,
          discount: saleRange,
        })
      );
    }

    const timer = setTimeout(() => {
      dispatch(
        updateFilters({
          page: currentPage,
          query,
          categories,
          price: priceRange,
          leastRating: rating,
          sellers: seller,
          sort: sortArr,
          onSale: sale,
          discount: saleRange,
        })
      );

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [
    dispatch,
    currentPage,
    query,
    categories,
    priceRange,
    rating,
    seller,
    sortObj,
    sale,
    saleRange,
  ]);

  useEffect(() => {
    dispatch(
      getProducts({
        page,
        query,
        categories,
        price,
        leastRating,
        sellers,
        sort,
        onSale,
        discount,
      })
    );
  }, [
    dispatch,
    page,
    query,
    // price,
    // leastRating,
    // sellers,
    // categories,
    // sort,
    // onSale,
    // discount,
  ]);

  return (
    <View style={styles.container}>
      <Header title="Filter Page" />
      <StatusBar style={styles.statusBar} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.about}>
          <Search />
        </View>
        <Category />
        {length ? (
          <>
            {newReq && loading ? (
              <Loader />
            ) : (
              <>
                <Carousel
                  items={products}
                  observerCallBack={observerCallBack}
                />
                {loading && <Loader />}
              </>
            )}
          </>
        ) : (
          <Loader />
        )}
      </ScrollView>

      <Nav />
    </View>
  );
};

export default Filter;
