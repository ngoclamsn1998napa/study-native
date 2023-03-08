import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {COLORS} from '../../util/colors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setLoggedIn} from '../../redux/authSlice';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onHandleLogout = async () => {
    const token = await AsyncStorage.removeItem('access_token');
    dispatch(setLoggedIn(!!token));
    navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profile}>
          <Text style={styles.profileText}>Profile</Text>
          <Pressable>
            <Image source={require('../../assets/icons/edit.png')} />
          </Pressable>
        </View>
        <View style={styles.profileInfo}>
          <View style={styles.profileInfoAvatar}>
            <Image source={require('../../assets/avatar.png')} />
          </View>
          <View>
            <Text style={styles.profileInfoName}>Thanh Pham</Text>
            <Text>thanhpham@gmail.com</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.listItem}>
          <Pressable>
            <View style={styles.itemCard}>
              <View style={styles.itemCardInfo}>
                <Image
                  source={require('../../assets/icons/profile_target.png')}
                />
                <Text style={styles.itemCardInfoTitle}>Target Setting</Text>
              </View>
              <Image source={require('../../assets/icons/profile_next.png')} />
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.itemCard}>
              <View style={styles.itemCardInfo}>
                <Image
                  source={require('../../assets/icons/profile_feedback.png')}
                />
                <Text style={styles.itemCardInfoTitle}>Tutorial</Text>
              </View>
              <Image source={require('../../assets/icons/profile_next.png')} />
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.itemCard}>
              <View style={styles.itemCardInfo}>
                <Image
                  source={require('../../assets/icons/profile_tutorial.png')}
                />
                <Text style={styles.itemCardInfoTitle}>Feedback</Text>
              </View>
              <Image source={require('../../assets/icons/profile_next.png')} />
            </View>
          </Pressable>
          <Pressable>
            <View style={styles.itemCard}>
              <View style={styles.itemCardInfo}>
                <Image
                  source={require('../../assets/icons/profile_change_password.png')}
                />
                <Text style={styles.itemCardInfoTitle}>Change Password</Text>
              </View>
              <Image source={require('../../assets/icons/profile_next.png')} />
            </View>
          </Pressable>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <TouchableOpacity onPress={onHandleLogout}>
            <View style={styles.buttonLogout}>
              <Image source={require('../../assets/icons/logout.png')} />
              <Text style={styles.buttonLogoutText}>Log out</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
  },
  header: {
    backgroundColor: COLORS.primary3,
    padding: 24,
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 700,
    color: COLORS.blueBlack,
  },
  profileInfo: {
    flexDirection: 'row',
    columnGap: 20,
    alignItems: 'center',
    color: COLORS.blueBlack,
    marginTop: 24,
  },
  profileInfoName: {
    fontSize: 18,
    fontWeight: 700,
  },
  profileInfoAvatar: {
    padding: 2,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.blueBlack,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  listItem: {
    rowGap: 16,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    backgroundColor: COLORS.white,
    shadowRadius: 20,
    shadowColor: 'rgba(138, 149, 158, 0.2)',
    shadowOpacity: 1,
  },
  itemCardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 16,
  },
  itemCardInfoTitle: {
    fontSize: 16,
    color: COLORS.blueBlack,
  },
  buttonLogout: {
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: '#A90F0F',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: 14,
    width: 160,
  },
  buttonLogoutText: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: 400,
  },
});

export default ProfileScreen;
