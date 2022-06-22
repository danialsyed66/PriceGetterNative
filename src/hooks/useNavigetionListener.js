import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';

const useNavigetionListener = func => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('focus', func);
  }, [navigation]);
};

export default useNavigetionListener;
