import {Pressable, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {searchStyle} from './style';
import {ArrowRight, ArrowRight2} from 'iconsax-react-native';
import {COLORS} from '../../theme/colors';
import { SCREENS } from '../../utils/routes';

const SearchItems = ({item}) => {
  const navigation = useNavigation();
  const {characterDetail} = SCREENS

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(characterDetail, {characterID: item.id})
      }
      style={searchStyle.container}>
      <Text style={searchStyle.searchList}>{item.name}</Text>
      <ArrowRight2 size="25" color={COLORS.Red} variant="Outline" />
    </Pressable>
  );
};

export default SearchItems;
