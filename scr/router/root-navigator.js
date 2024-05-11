import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../utils/routes';
import TabNavigator from './tab-navigation';
import CharachterDetails from '../screens/characters/charachter-details';
import {COLORS} from '../theme/colors';
import SearchCharacters from '../screens/characters/search-characters';
import FilterCharacters from '../screens/characters/filter-characters';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {tabNavigator, characterDetail, searchCharacters, filterCharacters} = SCREENS;
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.ScreenBgColor,
        },
        headerBackTitle: 'back',
        headerTintColor: COLORS.Black,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={tabNavigator}
        component={TabNavigator}
      />
      <Stack.Screen
       options={{
        headerShown: false,
      }}
      name={characterDetail} component={CharachterDetails} />

<Stack.Screen
       options={{
        headerShown: false,
      }}
      name={searchCharacters} component={SearchCharacters} />

<Stack.Screen
       options={{
        headerShown: false,
      }}
      name={filterCharacters} component={FilterCharacters} />



    </Stack.Navigator>
    
  );
};

export default RootNavigator;
