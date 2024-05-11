import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {ScreenStyle} from '../../styles/general-style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../theme/colors';
import CustomButtom from '../../components/ui/custom-buttom';
import {filterStyle} from './styles';
import {filterGender, filterStatus} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCharactersList,
  updateParams,
} from '../../redux/actions/characters-actions';

const FilterCharacters = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {parameters} = useSelector(state => state.charactersState);

  const filterCharacters = () => {
    dispatch(getCharactersList(parameters));
  };

  const clearFilter = () => {
    dispatch(getCharactersList());
    dispatch(updateParams({gender: null, status: null}));
  };

  // console.log(parameters);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={ScreenStyle.container}>
        <View>
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeft size="25" color={COLORS.Black} variant="Outline" />
          </Pressable>
        </View>

        <View style={{flex: 1, paddingVertical: 20}}>
          <ScrollView>
            <Text style={filterStyle.title}>Gender</Text>
            <View style={{flexDirection: 'row'}}>
              {filterGender.map(item => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => dispatch(updateParams({gender: item.value}))}
                  style={[
                    filterStyle.titleInfo,
                    {
                      backgroundColor:
                        parameters.gender == item.value
                          ? COLORS.Blue
                          : COLORS.LightBrown,
                    },
                  ]}>
                  <Text style={filterStyle.text}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={filterStyle.title}>Status</Text>
            <View style={{flexDirection: 'row'}}>
              {filterStatus.map(item => (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => dispatch(updateParams({status: item.value}))}
                  style={[
                    filterStyle.titleInfo,
                    {
                      backgroundColor:
                        parameters.status == item.value
                          ? COLORS.Blue
                          : COLORS.LightBrown,
                    },
                  ]}>
                  <Text style={filterStyle.text} key={item.id}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </View>

        <View style={filterStyle.btnContainer}>
          <CustomButtom
            title="Filter"
            BgColor={COLORS.Green}
            titleColor={COLORS.White}
            onPress={() => {
              filterCharacters(), navigation.goBack();
            }}
          />
          <CustomButtom
            title="Clear"
            BgColor={COLORS.Red}
            titleColor={COLORS.White}
            onPress={() => {
              clearFilter(), navigation.goBack();
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default FilterCharacters;
