import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {COLORS} from '../../util/colors';

const AuthLayout = ({isBgFooter = true, children}) => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.inner}>
        <ImageBackground
          style={styles.headerBackground}
          source={require('../../assets/auth_logo.png')}
        />
        <View style={styles.divider}></View>
        {children}
        {isBgFooter && (
          <ImageBackground
            style={styles.footerBackground}
            source={require('../../assets/auth_footer.png')}
          />
        )}
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
  },
  headerBackground: {
    width: '100%',
    height: 272,
  },
  footerBackground: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 155,
    zIndex: -1,
  },
  divider: {
    borderBottomColor: COLORS.primary3,
    borderBottomWidth: 1,
    marginLeft: 36,
    marginRight: 36,
  },
  inner: {
    flex: 1,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
});

export default AuthLayout;
