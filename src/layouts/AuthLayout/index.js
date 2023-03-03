import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import {COLORS} from '../../util/colors';

const AuthLayout = ({children}) => (
  <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.inner}>
        <ImageBackground
          style={styles.headerBackground}
          source={require('../../assets/auth_logo.png')}
        />
        <View style={styles.divider}></View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.white,
  },
  headerBackground: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    height: 272,
  },
  divider: {
    borderBottomColor: COLORS.primary3,
    borderBottomWidth: 1,
    marginLeft: 36,
    marginRight: 36,
  },
  inner: {
    paddingBottom: 60,
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default AuthLayout;
