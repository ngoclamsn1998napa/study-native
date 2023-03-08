import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from './src/pages/Auth/Login';
import YourLanguageScreen from './src/pages/YourLanguage';
import RegisterScreen from './src/pages/Auth/Register';
import {useSelector} from 'react-redux';
import {authSelector} from './src/redux/authSlice';
import MainLayout from './src/layouts/MainLayout';

const Stack = createNativeStackNavigator();

const App = () => {
  const {isLoggedIn} = useSelector(authSelector);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <MainLayout />
      ) : (
        <>
          <Stack.Navigator initialRouteName="Login">
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
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default App;
