import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import { Entypo, AntDesign } from 'react-native-vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { Fontisto } from 'react-native-vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import {
  AuthLayout,
  FormInput,
  Loader,
  Nav,
  TextButton,
} from '../../../components';
import { COLORS, validateEmail, validatePassword } from '../../../utils';
import DefaultImage from '../../../assets/default_avatar.jpg';
import { useCheckAuth } from '../../../hooks';
import { register } from '../../../redux/actions/authActions';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [previewImage, setPreviewImage] = useState(DefaultImage);
  const [image, setImage] = useState(null);
  const [seller, setSeller] = useState(false);

  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const { loading } = useSelector(state => state.auth);

  useCheckAuth('signUp');

  const handleOpenGallary = async () => {
    setPreviewImage(DefaultImage);
    setImage(null);
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0,
      base64: true,
    });

    if (result.cancelled) return;

    const extension = result.uri.substr(result.uri.lastIndexOf('.') + 1);
    setImage(`data:image/${extension};base64,${result.base64}`);
    setPreviewImage({ uri: result.uri });
  };

  const handleOpenCamera = async () => {
    setPreviewImage(DefaultImage);
    setImage(null);
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0,
      base64: true,
    });

    if (result.cancelled) return;

    const extension = result.uri.substr(result.uri.lastIndexOf('.') + 1);
    setImage(`data:image/${extension};base64,${result.base64}`);
    setPreviewImage({ uri: result.uri });
  };

  const handleRegister = () => {
    if (password === '' && passwordError === '')
      setPasswordError('Pasword is Required.');
    if (confirmPassword === '' && confirmPasswordError === '')
      setConfirmPasswordError('Confirm Pasword is Required.');
    if (email === '' && emailError === '') setEmailError('Email is Required.');
    if (name === '' && nameError === '') setNameError('Name is Required.');

    if (email.length === 0 || password.length === 0) return;

    dispatch(
      register({
        name,
        email,
        password,
        avatar: image,
        role: seller ? 'seller' : undefined,
      })
    );
  };

  useEffect(() => {
    if (password.length && passwordError !== '') setPasswordError('');
    if (confirmPassword.length && confirmPasswordError !== '')
      setConfirmPasswordError('');
    if (name.length && nameError !== '') setNameError('');
  }, [password, confirmPassword, name]);

  return (
    <>
      <AuthLayout title="Sign Up" titleContainerStyle={styles.title}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <FormInput
              label="Name"
              containerStyle={styles.emailComponent}
              onChange={value => setName(value)}
              errorMsg={nameError}
              appendComponent={
                <View style={styles.emailAppendContainer}>
                  <AntDesign
                    name={'checkcircle'}
                    style={{
                      height: 25,
                      width: 40,
                      fontSize: 21,
                      color:
                        name === '' && nameError === ''
                          ? COLORS.grey
                          : name !== ''
                          ? COLORS.green
                          : COLORS.red,
                    }}
                  />
                </View>
              }
            />

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
                      width: 40,
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
              onChange={value => {
                validatePassword(value, setPasswordError);

                setPassword(value);
              }}
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

            <FormInput
              label="Confirm Password"
              secureTextEntry={!showConfirmPassword}
              autoCompleteType="password"
              containerStyle={styles.passwordContainer}
              onChange={value => {
                setConfirmPasswordError('');

                if (password !== value)
                  setConfirmPasswordError('You Passwords donot match');

                setConfirmPassword(value);
              }}
              errorMsg={confirmPasswordError}
              appendComponent={
                <TouchableOpacity
                  style={styles.passwordAppendContainer}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Entypo
                    name={showConfirmPassword ? 'eye-with-line' : 'eye'}
                    style={styles.passwordAppendImage}
                  />
                </TouchableOpacity>
              }
            />

            <View style={styles.avatarContainer}>
              <View style={styles.avatarPreviewContainer}>
                <Image source={previewImage} style={styles.avatarPreview} />
              </View>

              <View style={styles.avatarActions}>
                <TextButton
                  onPress={handleOpenGallary}
                  text="Open Gallary"
                  containerStyle={null}
                  touchStyle={null}
                  textStyle={styles.signInButtonText}
                />

                <Text style={styles.signInText}> or </Text>

                <TextButton
                  onPress={handleOpenCamera}
                  text="Open Camera"
                  containerStyle={null}
                  touchStyle={null}
                  textStyle={styles.signInButtonText}
                />
              </View>
            </View>

            <View style={styles.checkboxContainer}>
              <TouchableWithoutFeedback
                style={styles.checkboxTouch}
                onPress={() => setSeller(!seller)}
              >
                <Fontisto
                  name={`checkbox-${seller ? 'active' : 'passive'}`}
                  style={[
                    styles.checkbox,
                    seller ? { color: COLORS.green } : {},
                  ]}
                />
              </TouchableWithoutFeedback>
              <Text style={styles.checkboxLabel}>Seller</Text>
            </View>

            <TextButton onPress={handleRegister} text="Sign Up" />

            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Already have an account? </Text>

              <TextButton
                onPress={() => navigate('Sign In')}
                text="Sign In"
                containerStyle={null}
                touchStyle={null}
                textStyle={styles.signInButtonText}
              />
            </View>
          </>
        )}
      </AuthLayout>

      <Nav />
    </>
  );
};

export default SignUp;
