import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const useAuthRedirect = () => {
  const navigation = useNavigation();

  const { isAuth, loading } = useSelector(state => state.auth);

  useEffect(() => {
    if (!isAuth && !loading) navigation.navigate('Sign In', { redirect: true });
  }, [navigation, isAuth, loading]);

  return isAuth;
};

export default useAuthRedirect;
