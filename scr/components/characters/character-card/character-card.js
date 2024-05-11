import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import characterCard from './style';
import {ArrowRight} from 'iconsax-react-native';
import {COLORS} from '../../../theme/colors';
import GenderIcon from '../gender-icon';
import StatusIcon from '../status-icon';
import {useNavigation} from '@react-navigation/native';
import { SCREENS } from '../../../utils/routes';

const CharacterCard = ({item}) => {
  const navigation = useNavigation();
  const {characterDetail} = SCREENS

  return (
    <Pressable
      onPress={() => navigation.navigate(characterDetail, {characterID:item.id})}
      style={characterCard.container}>
      <View style={characterCard.imageContainer}>
        <Image style={characterCard.image} source={{uri: item.image}} />
      </View>

      <View style={characterCard.infoContainer}>
        <View>
          <Text style={characterCard.name}>{item.name}</Text>
        </View>

        <View style={characterCard.middelContainer}>
          <Text style={characterCard.species}>{item.species}</Text>
          <ArrowRight size="20" color={COLORS.Black} variant="Outline" />
        </View>

        <View style={characterCard.bottonContainer}>
          <View style={characterCard.iconContainer}>
            <StatusIcon size={15} status={item.status} />
            <Text style={characterCard.status}>{item.status}</Text>
          </View>
          <View style={characterCard.iconContainer}>
            <GenderIcon size={15} gender={item.gender} />
            <Text style={characterCard.gender}>{item.gender}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CharacterCard;
