import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native';

const useKeyboardDetector = init => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(init);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  return [isKeyboardVisible, setKeyboardVisible];
};

export default useKeyboardDetector;
