import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { alert } from '../utils';
import { clearErrors } from '../redux/actions/productActions';

const useErrorsAlert = () => {
  const dispatch = useDispatch();

  const { error: productsError } = useSelector(state => state.products);
  const { error: productDetailsError } = useSelector(
    state => state.productDetails
  );
  const { error: authError } = useSelector(state => state.auth);
  const { error: userError } = useSelector(state => state.user);
  const { error: homeError } = useSelector(state => state.home);
  const { error: forgotPasswordError } = useSelector(
    state => state.forgotPassword
  );
  const { error: cartError } = useSelector(state => state.cart);
  const { error: orderError } = useSelector(state => state.order);
  const { error: myOrdersError } = useSelector(state => state.myOrders);
  const { error: orderDetailsError } = useSelector(state => state.orderDetails);
  const { error: reviewError } = useSelector(state => state.review);
  const { error: forumsError } = useSelector(state => state.forums);
  const { error: sellerError } = useSelector(state => state.seller);

  useEffect(() => {
    if (productsError) alert(productsError);
    if (productDetailsError) alert(productDetailsError);
    if (authError) alert(authError);
    if (userError) alert(userError);
    if (homeError) alert(homeError);
    if (forgotPasswordError) alert(forgotPasswordError);
    if (cartError) alert(cartError);
    if (orderError) alert(orderError);
    if (myOrdersError) alert(myOrdersError);
    if (orderDetailsError) alert(orderDetailsError);
    if (reviewError) alert(reviewError);
    if (forumsError) alert(forumsError);
    if (sellerError) alert(sellerError);

    dispatch(clearErrors());
  }, [
    dispatch,
    productsError,
    productDetailsError,
    authError,
    userError,
    homeError,
    forgotPasswordError,
    cartError,
    orderError,
    myOrdersError,
    orderDetailsError,
    reviewError,
    forumsError,
    sellerError,
  ]);

  return;
};

export default useErrorsAlert;
