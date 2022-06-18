import React, { useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from './styles';
import Logo from '../../Logo';
import { useKeyboardDetector } from '../../../hooks';

const Layout = ({ title, subtitle, titleContainerStyle, children }) => {
  const [isKeyboardVisible] = useKeyboardDetector(false);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        // keyboardDismissMode="on-drag"
        contentContainerStyle={
          isKeyboardVisible
            ? styles.scrollContainerWithKeyboard
            : styles.scrollContainer
        }
      >
        <Logo touchStyles={styles.logoTouch} />
        {/* <Logo /> */}

        <View style={[styles.titleContainer, titleContainerStyle]}>
          <Text style={styles.titleText}>{title}</Text>
        </View>

        {children}
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Layout;
