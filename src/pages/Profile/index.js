import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import {COLORS} from '../../util/colors';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, getMe, setLoggedIn} from '../../redux/authSlice';

const ProfileScreen = () => {
  const theme = useColorScheme();
  const styles = styling(theme);
  const {user} = useSelector(authSelector);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const onHandleLogout = async () => {
    const token = await AsyncStorage.removeItem('access_token');
    dispatch(setLoggedIn(!!token));
    navigation.navigate('Login');
  };

  useEffect(() => {
    dispatch(getMe());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            <Text style={styles.profileInfoName}>
              {user?.full_name || 'No name'}
            </Text>
            <Text>{user?.email}</Text>
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

const styling = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS[theme].gray,
    },
    header: {
      backgroundColor: COLORS[theme].primary3,
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
      color: COLORS[theme].blueBlack,
    },
    profileInfo: {
      flexDirection: 'row',
      columnGap: 20,
      alignItems: 'center',
      color: COLORS[theme].blueBlack,
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
      borderColor: COLORS[theme].blueBlack,
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
      shadowRadius: 20,
      shadowColor: '#8a959e',
      shadowOpacity: 1,
      elevation: 3,
      backgroundColor: COLORS[theme].white,
    },
    itemCardInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 16,
    },
    itemCardInfoTitle: {
      fontSize: 16,
      color: COLORS[theme].blueBlack,
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
      color: COLORS[theme].white,
      fontSize: 17,
      fontWeight: 400,
    },
  });

export default ProfileScreen;
