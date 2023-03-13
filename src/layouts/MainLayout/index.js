import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import ProfileScreen from '../../pages/Profile';
import {COLORS} from '../../util/colors';
import HomeIconSVG from '../../assets/icons/home.svg';
import QAIconSVG from '../../assets/icons/qa.svg';
import ChartIconSVG from '../../assets/icons/chart.svg';
import UserIconSVG from '../../assets/icons/user.svg';
import HomeScreen from '../../pages/Home';
import QaScreen from '../../pages/Qa';
import ChartScreen from '../../pages/Chart';
import {Animated, useColorScheme} from 'react-native';
const Tab = createBottomTabNavigator();
const MainLayout = () => {
  const theme = useColorScheme();

  return (
    <Tab.Navigator
      initialRouteName={'Analytics'}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        animationEnabled: true,
        cardStyleInterpolator: ({current}) => ({
          cardStyle: {
            transform: [
              {
                translateX: Animated.multiply(
                  current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [100, 0],
                  }),
                  -1,
                ),
              },
            ],
          },
        }),
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
        tabBarActiveTintColor: COLORS[theme].primary,
        tabBarInactiveTintColor: COLORS[theme].silver,
        tabBarStyle: {
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          backgroundColor: COLORS[theme].white,
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
              iconName = <HomeIconSVG style={{color: color}} />;
              break;
            case 'Q&A':
              iconName = <QAIconSVG style={{color: color}} />;
              break;
            case 'Analytics':
              iconName = <ChartIconSVG style={{color: color}} />;
              break;
            case 'Profile':
              iconName = <UserIconSVG style={{color: color}} />;
              break;
            default:
              break;
          }
          return iconName;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Q&A" component={QaScreen} />
      <Tab.Screen name="Analytics" component={ChartScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainLayout;
