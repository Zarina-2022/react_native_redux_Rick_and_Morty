import {useNavigation} from '@react-navigation/native';
import {View, TouchableOpacity} from 'react-native';

// import icons
import {Filter, SearchNormal} from 'iconsax-react-native';
import {COLORS} from '../../theme/colors';
import {iconStyles} from './style';
import {SCREENS} from '../../utils/routes';

const HeaderRightIcons = () => {
  const navigation = useNavigation();
  const {searchCharacters, filterCharacters} = SCREENS;

  return (
    <View style={iconStyles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(searchCharacters)}>
        <SearchNormal size={25} color={COLORS.Red} variant="Bold" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(filterCharacters)}>
        <Filter size={25} color={COLORS.Red} variant="Bold" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderRightIcons;
