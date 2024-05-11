import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Characters from '../screens/characters';
import Episodes from '../screens/episodes';
import Locations from '../screens/locations';
import Settings from '../screens/settings';

import {SCREENS} from '../utils/routes';

import {TabBarStyle} from '../styles/general-style';
import {COLORS} from '../theme/colors';

import TabIcons from '../components/tabicons/tab-icons';
import HeaderRightIcons from '../components/router/header-right-icons';

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const {characters, episodes, locations, settings} = SCREENS;

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => (
          <TabIcons
            screenName={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        headerStyle: TabBarStyle.headerStyle, // header style
        tabBarStyle: TabBarStyle.tabBarStyle, // tab bottom background style
        tabBarShowLabel: true, // Icon nun altindaki labelleri gizler
        tabBarActiveTintColor: COLORS.Red, // Active iken rengi degistirmek icin
        tabBarInactiveTintColor: 'gray', // Inactive iken rengi degistirmek icin
        headerRight: () => <HeaderRightIcons />,
        headerTitleStyle: {
          fontSize: 26,
          color: COLORS.Black,
        },
      })}
      initialRouteName={characters}>
      <Tab.Screen name={characters} component={Characters} />
      <Tab.Screen name={episodes} component={Episodes} />
      <Tab.Screen name={locations} component={Locations} />
      <Tab.Screen name={settings} component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
