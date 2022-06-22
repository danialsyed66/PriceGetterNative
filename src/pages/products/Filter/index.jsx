import React, { useEffect, useRef, useState } from 'react';
import { View, ScrollView, StatusBar, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import {
  Carousel,
  Category,
  Loader,
  Nav,
  Search,
  Header,
  Product,
} from '../../../components';
import { getProducts } from '../../../redux/actions/productActions';
import {
  // setFilters,
  updateFilters,
} from '../../../redux/actions/filterActions';
import { useRoute } from '@react-navigation/native';

const Filter = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef();

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

  const [sale /* , setSale */] = useState(onSale);
  const [saleRange /* , setSaleRange */] = useState(discount);
  const [currentPage, setCurrentPage] = useState(page);
  const [priceRange /* , setPriceRange */] = useState(price);
  const [rating /*,setRating*/] = useState(leastRating);
  const [seller, setSeller] = useState(sellers);
  const [category, setCategory] = useState(categories);
  const [search, setSearch] = useState(query);
  const [sortObj, setSortObj] = useState({ val: sort[0], order: sort[1] });

  // const [priceRadio, setPriceRadio] = useState(0);
  // const [saleRadio, setSaleRadio] = useState(0);
  // const [sortRadioOrder, setSortRadioOrder] = useState(sortObj.order || 0);
  // const [sortRadioVal, setSortRadioVal] = useState(sortObj.val || 0);
  // const [categoriesCheckBox, setCategoriesCheckBox] = useState(
  //   CATEGORIES.map(({ val }) => category.includes(val))
  // );
  // const [sellerCheckBox, setSellerCheckBox] = useState(
  //   SELLERS.map(({ val }) => seller.includes(val))
  // );

  const loadMore = () => {
    if (hasMore) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (length >= totalProducts) setHasMore(false);
  }, [length, totalProducts]);

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
          query: search,
          categories: category,
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
          query: search,
          categories: category,
          price: priceRange,
          leastRating: rating,
          sellers: seller,
          sort: sortArr,
          onSale: sale,
          discount: saleRange,
        })
      );

      scrollRef.current?.scrollTo({
        y: 0,
        animated: true,
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [
    dispatch,
    currentPage,
    search,
    category,
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
    categories,
    // price,
    // leastRating,
    // sellers,
    // sort,
    // onSale,
    // discount,
  ]);

  const renderHead = () => (
    <>
      <View style={styles.about}>
        <Search setSearch={setSearch} />
      </View>
      <Category setCategory={setCategory} />
    </>
  );

  return (
    <View style={styles.container}>
      <Header title="Filter Page" />
      <StatusBar style={styles.statusBar} />
      {length ? (
        <>
          {newReq && loading ? (
            <>
              {renderHead()}
              <Loader />
            </>
          ) : (
            <FlatList
              data={products}
              onEndReached={loadMore}
              renderItem={({ item }) => (
                <Product
                  product={item}
                  containerStyle={{
                    flex: 1,
                  }}
                />
              )}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              numColumns={2}
              style={styles.itemsContainer}
              ListHeaderComponent={renderHead()}
              ListFooterComponent={
                <View style={{ marginBottom: 20 }}>
                  {loading && <Loader />}
                </View>
              }
            />
          )}
        </>
      ) : loading ? (
        <Loader />
      ) : (
        renderHead()
      )}

      <Nav />
    </View>
  );
};

export default Filter;
