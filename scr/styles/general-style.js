import {StyleSheet} from 'react-native';
import {COLORS} from '../theme/colors';

export const ScreenStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.ScreenBgColor,
  },
});

export const TabBarStyle = StyleSheet.create({
  // header style:
  headerStyle: {
    backgroundColor: COLORS.ScreenBgColor,
  },
  // tab bottom background style:
  tabBarStyle: {
    backgroundColor: COLORS.ScreenBgColor,
  },
});
