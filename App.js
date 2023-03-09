import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {useSelector} from 'react-redux';
import {authSelector} from './src/redux/authSlice';
import {StyleSheet, Text} from 'react-native';
import MainStack from './src/layouts/MainStack';
import AuthStack from './src/layouts/AuthStack';

const App = () => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = styles.text;
  const {isLoggedIn} = useSelector(authSelector);
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'UTM Avo',
  },
});

export default App;
