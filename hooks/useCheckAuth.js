import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { alert } from '../utils';

const useCheckAuth = checkFor => {
  const navigation = useNavigation();
  const redirect = useRoute().params?.redirect;

  const { isAuth } = useSelector(state => state.auth);

  useEffect(() => {
    if (!redirect && isAuth)
      alert(
        'Success',
        `${checkFor === 'signUp' ? 'Registered' : 'Logged in'} successfully`
      );

    if (isAuth)
      if (checkFor === 'signUp') navigation.navigate('Home');
      else navigation.goBack();
  }, [isAuth, checkFor]);

  return isAuth;
};

export default useCheckAuth;
