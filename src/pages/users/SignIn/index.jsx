import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo, AntDesign } from 'react-native-vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import {
  AuthLayout,
  FormInput,
  Loader,
  Nav,
  TextButton,
} from '../../../components';
import { COLORS, openUrl, validateEmail } from '../../../utils';
import { login } from '../../../redux/actions/authActions';
import { useCheckAuth } from '../../../hooks';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.auth);

  useCheckAuth();

  const handleLogin = () => {
    if (password === '' && passwordError === '')
      setPasswordError('Pasword is Required.');
    if (email === '' && emailError === '') setEmailError('Email is Required.');

    if (email.length === 0 || password.length === 0) return;

    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (password.length && passwordError !== '') setPasswordError('');
  }, [password]);
  useEffect(() => {
    // Alert.alert('Success', 'Logged in successfully');
  });

  return (
    <>
      <AuthLayout title="Sign In">
        {loading ? (
          <Loader />
        ) : (
          <>
            <FormInput
              label="Email"
              containerStyle={styles.emailComponent}
              keyboardType="email-address"
              autoCompleteType="email"
              onChange={value => {
                validateEmail(value, setEmailError);

                setEmail(value);
              }}
              errorMsg={emailError}
              appendComponent={
                <View style={styles.emailAppendContainer}>
                  <AntDesign
                    name={'checkcircle'}
                    style={{
                      height: 25,
                      width: 30,
                      color:
                        email === ''
                          ? COLORS.grey
                          : email !== '' && emailError === ''
                          ? COLORS.green
                          : COLORS.red,
                      fontSize: 21,
                    }}
                  />
                </View>
              }
            />

            <FormInput
              label="Password"
              secureTextEntry={!showPassword}
              autoCompleteType="password"
              containerStyle={styles.passwordContainer}
              onChange={value => setPassword(value)}
              errorMsg={passwordError}
              appendComponent={
                <TouchableOpacity
                  style={styles.passwordAppendContainer}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Entypo
                    name={showPassword ? 'eye-with-line' : 'eye'}
                    style={styles.passwordAppendImage}
                  />
                </TouchableOpacity>
              }
            />

            <TextButton
              // onPress={() => navigate('Forgot Password')}
              onPress={() =>
                openUrl(`https://price-getter.netlify.app/forgotpassword`)
              }
              text="Forgot Password?"
              containerStyle={styles.fogotPasswordComponent}
              touchStyle={null}
              textStyle={styles.fogotPasswordText}
            />

            <TextButton onPress={handleLogin} text="Sign In" />

            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>
                Don&apos;t have an account?{' '}
              </Text>

              <TextButton
                onPress={() => navigate('Sign Up')}
                text="Sign Up"
                containerStyle={null}
                touchStyle={null}
                textStyle={styles.signUpButtonText}
              />
            </View>
          </>
        )}
      </AuthLayout>

      <Nav />
    </>
  );
};

export default SignIn;
