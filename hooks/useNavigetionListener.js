import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const useNavigetionListener = func => {
  const navigation = useNavigation();

  useEffect(() => {
    const navigetionListener = navigation.addListener('focus', func);

    // return () => navigetionListener.remove();
  }, [navigation]);
};

export default useNavigetionListener;
