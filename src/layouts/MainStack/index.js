import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainLayout from '../MainLayout';
const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainLayout"
        component={MainLayout}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
