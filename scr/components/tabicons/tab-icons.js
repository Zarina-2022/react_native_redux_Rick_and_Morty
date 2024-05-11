import React from 'react';
import {SCREENS} from '../../utils/routes';
import {
  Book1,
  LocationTick,
  PresentionChart,
  Setting2,
} from 'iconsax-react-native';

const TabIcons = ({screenName, color, focused, size}) => {
  const {characters, episodes, locations, settings} = SCREENS;

  if (screenName == characters) {
    return (
      <Book1 size={size} color={color} variant={focused ? 'Bold' : 'Outline'} />
    );
  }
  if (screenName == episodes) {
    return (
      <PresentionChart
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (screenName == locations) {
    return (
      <LocationTick
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
  if (screenName == settings) {
    return (
      <Setting2
        size={size}
        color={color}
        variant={focused ? 'Bold' : 'Outline'}
      />
    );
  }
};

export default TabIcons;
