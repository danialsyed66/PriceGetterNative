import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AuthLayout, BottomButton, FormInput, Nav } from '../../../components';
import { useAuthRedirect } from '../../../hooks';
import { saveShippingInfo } from '../../../redux/actions/cartActions';

const ShippingInfo = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const { shippingInfo } = useSelector(state => state.cart);

  const [address, setAddress] = useState(shippingInfo?.address);
  const [city, setCity] = useState(shippingInfo?.city);
  const [postalCode, setPostalCode] = useState(shippingInfo?.postalCode);
  const [phone, setPhone] = useState(shippingInfo?.phoneNo);
  const [addressError, setAddressError] = useState(null);
  const [cityError, setCityError] = useState(null);
  const [postalCodeError, setPostalCodeError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);

  useAuthRedirect();

  const handleShipping = async () => {
    setAddressError(null);
    setCityError(null);
    setPostalCodeError(null);
    setPhoneError(null);

    let isError = false;

    if (!address || address === '') {
      setAddressError('Address is required');
      isError = true;
    }
    if (!city || city === '') {
      setCityError('City is required');
      isError = true;
    }
    if (!postalCode || postalCode === '') {
      setPostalCodeError('Postal Code is required');
      isError = true;
    }
    if (!phone || phone === '') {
      setPhoneError('Phone is required');
      isError = true;
    }

    if (isError) return;

    dispatch(
      saveShippingInfo({
        address,
        city,
        postalCode,
        phoneNo: phone,
        country: 'Pakistan',
      })
    );

    navigate('Payment');
  };

  return (
    <>
      <AuthLayout title="Shipping Info">
        <FormInput
          label="Address"
          onChange={value => setAddress(value)}
          errorMsg={addressError}
          defaultValue={address}
        />
        <FormInput
          label="City"
          onChange={value => setCity(value)}
          errorMsg={cityError}
          defaultValue={city}
        />
        <FormInput
          label="Phone No"
          onChange={value => setPhone(value)}
          keyboardType="numeric"
          errorMsg={phoneError}
          defaultValue={phone}
        />
        <FormInput
          label="Postal Code"
          keyboardType="numeric"
          onChange={value => setPostalCode(value)}
          errorMsg={postalCodeError}
          defaultValue={postalCode}
        />
      </AuthLayout>
      <BottomButton onPress={handleShipping} text="Continue" />

      <Nav />
    </>
  );
};

export default ShippingInfo;
