import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/pages/Auth/Login';
import YourLanguageScreen from './src/pages/YourLanguage';
import RegisterScreen from './src/pages/Auth/Register';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, setLoggedIn} from './src/redux/authSlice';
import MainLayout from './src/layouts/MainLayout';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StyleSheet, Text} from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = styles.text;
  const {isLoggedIn} = useSelector(authSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const checkLoggedIn = async () => {
    const token = await AsyncStorage.getItem('access_token');
    dispatch(setLoggedIn(!!token)); // double negate the token value to convert it to a boolean
  };

  useEffect(() => {
    setTimeout(() => {
      checkLoggedIn();
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <>
            <Stack.Screen
              name="MainLayout"
              component={MainLayout}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="YourLanguage"
              component={YourLanguageScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'UTM Avo', // Thay thế bằng tên font của bạn
  },
});

export default App;
