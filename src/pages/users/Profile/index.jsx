import React from 'react';
import { View, Text } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import {
  AuthLayout,
  Nav,
  Header,
  IconButton,
  BottomButton,
} from '../../../components';
import { printDate } from '../../../utils';
import { useAuthRedirect } from '../../../hooks';

const Profile = () => {
  useAuthRedirect();

  const { navigate } = useNavigation();
  const { user } = useSelector(state => state.auth);

  return (
    <>
      <Header title="Profile" />

      <AuthLayout title="My Profile" image={user?.avatar?.url}>
        <View style={styles.contentContainer}>
          <View style={styles.content}>
            <Text style={styles.key}>Name: </Text>
            <Text style={styles.value}>{user?.name}</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.key}>Email: </Text>
            <Text style={styles.value}>{user?.email}</Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.key}>Joined on: </Text>
            <Text style={styles.value}>{printDate(user?.createdAt)}</Text>
          </View>
        </View>

        {/* <View style={styles.buttonsContainer}>
          <IconButton
            Icon={MaterialCommunityIcons}
            name="account-edit"
            text="Edit Profile"
            onPress={() => navigate('Home')}
          />
          <IconButton
            Icon={MaterialCommunityIcons}
            name="key-change"
            text="Change Password"
            onPress={() => navigate('Home')}
          />
        </View> */}
      </AuthLayout>

      <BottomButton text="Wishlist" onPress={() => navigate('Wishlist')} />

      <Nav />
    </>
  );
};

export default Profile;
