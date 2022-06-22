import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useDispatch } from 'react-redux';

import styles from './styles';
import PriceGetter from '../../../assets/PriceGetter.png';
import { isImage, openUrl } from '../../../utils';
import { removeFromCart, updateCart } from '../../../redux/actions/cartActions';
import { handleFavourite } from '../../../redux/actions/userActions';
import { useEffect } from 'react';

const ProductList = ({ products, forCart, forFavourites, message }) => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const [items, setItems] = useState(products);

  const decreaseQuantity = (id, quantity) => {
    if (quantity === 1) return;

    quantity -= 1;

    dispatch(updateCart(id, quantity));
  };

  const increaseQuantity = (id, quantity, stock) => {
    if (quantity >= stock) return;

    quantity += 1;

    dispatch(updateCart(id, quantity));
  };

  useEffect(() => {
    if (!forFavourites || !products?.length) return;

    setItems(
      products.map(fav => {
        return { ...fav.product, favouriteId: fav._id };
      })
    );
  }, [forFavourites, products]);

  return (
    <View style={styles.container}>
      {!items?.length ? (
        <Text style={styles.titleAlt}>{message}</Text>
      ) : (
        items?.map(
          ({
            _id,
            name,
            price,
            images,
            seller,
            url,
            oldPrice,
            quantity,
            favouriteId,
          }) => {
            return (
              <TouchableOpacity
                key={_id}
                style={styles.productContainer}
                onPress={() => navigate('Product Details', { id: _id })}
              >
                <View style={styles.imageContainer}>
                  <Image
                    source={
                      images?.[0]?.url ? { uri: images?.[0]?.url } : PriceGetter
                    }
                    style={styles.image}
                  />
                </View>

                <View style={styles.contentContainer}>
                  <View style={styles.title}>
                    <Text style={styles.nameText}>
                      {name?.replace(/^(.{15}[^\s]*).*/, '$1')}
                    </Text>
                    <TouchableOpacity
                      style={styles.seller}
                      onPress={() =>
                        openUrl(
                          url ||
                            `https://price-getter.netlify.app/product/${_id}`
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

                  <View style={styles.priceContainer}>
                    <Text style={styles.priceText}>Rs. {price} </Text>
                    {oldPrice && (
                      <Text style={styles.oldPriceText}>Rs. {oldPrice}</Text>
                    )}
                  </View>

                  <View style={styles.actionsContainer}>
                    {(forFavourites || forCart) && (
                      <View style={styles.quantityActions}>
                        {forCart && (
                          <>
                            <TouchableOpacity style={styles.iconContainer}>
                              <MaterialCommunityIcons
                                name="minus"
                                style={styles.icon}
                                onPress={() => decreaseQuantity(_id, quantity)}
                              />
                            </TouchableOpacity>
                            <Text style={styles.quantityText}>{quantity}</Text>
                            <TouchableOpacity style={styles.iconContainer}>
                              <MaterialCommunityIcons
                                name="plus"
                                style={styles.icon}
                                onPress={() => increaseQuantity(_id, quantity)}
                              />
                            </TouchableOpacity>
                          </>
                        )}
                      </View>
                    )}
                    {(forFavourites || forCart) && (
                      <TouchableOpacity
                        onPress={
                          forCart
                            ? () => dispatch(removeFromCart(_id))
                            : () => dispatch(handleFavourite(_id, favouriteId))
                        }
                      >
                        <MaterialCommunityIcons
                          name="delete-outline"
                          style={styles.deleteIcon}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          }
        )
      )}
    </View>
  );
};

export default ProductList;
