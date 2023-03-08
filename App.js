import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/pages/Auth/Login';
import YourLanguageScreen from './src/pages/YourLanguage';
import RegisterScreen from './src/pages/Auth/Register';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, login, setLoggedIn} from './src/redux/authSlice';
import MainLayout from './src/layouts/MainLayout';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  const {isLoggedIn} = useSelector(authSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = await AsyncStorage.getItem('access_token');
      dispatch(setLoggedIn(!!token)); // double negate the token value to convert it to a boolean
    };

    checkLoggedIn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'YourLanguage'}>
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

export default App;
