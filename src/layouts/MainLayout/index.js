import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image} from 'react-native';
import ProfileScreen from '../../pages/Profile';
import {COLORS} from '../../util/colors';
const Tab = createBottomTabNavigator();
const MainLayout = () => (
  <Tab.Navigator
    initialRouteName={'Profile'}
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarShowLabel: true,
      tabBarHideOnKeyboard: true,
      tabBarLabelStyle: {
        fontSize: 13,
        fontWeight: 400,
        marginBottom: 0,
        padding: 0,
        margin: 0,
      },
      tabBarItemStyle: {
        rowGap: 16,
        padding: 0,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
      },
      tabBarActiveTintColor: COLORS.primary,
      tabBarStyle: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        height: 90,
        indicatorStyle: {
          width: 0,
          height: 0,
          elevation: 0,
        },
      },
      tabBarIconStyle: {
        flexGrow: 0,
        marginTop: 0,
        width: 24,
        height: 24,
        padding: 0,
        margin: 0,
      },
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        switch (route.name) {
          case 'Home':
            iconName = require('../../assets/icons/home.png');
            break;
          case 'Q&A':
            iconName = require('../../assets/icons/qa.png');
            break;
          case 'Analytics':
            iconName = require('../../assets/icons/chart.png');
            break;
          case 'Profile':
            iconName = require('../../assets/icons/user.png');
            break;
          default:
            break;
        }
        return <Image source={iconName} />;
      },
    })}>
    <Tab.Screen name="Home" component={ProfileScreen} />
    <Tab.Screen name="Q&A" component={ProfileScreen} />
    <Tab.Screen name="Analytics" component={ProfileScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

export default MainLayout;
