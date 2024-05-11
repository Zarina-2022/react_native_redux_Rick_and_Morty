import {Pressable, SafeAreaView, View, FlatList, TextInput, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import React, {useEffect, useState} from 'react';

import {ScreenStyle} from '../../styles/general-style';
import {searchScreenStyle} from './styles';

import {ArrowLeft} from 'iconsax-react-native';

import {COLORS} from '../../theme/colors';

// Redux
import {useDispatch, useSelector} from 'react-redux';
import {
  getCharactersList,
  updateParams,
} from '../../redux/actions/characters-actions';

// Components
import SearchItems from '../../components/characters/search-items';

const SearchCharacters = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {characterList, parameters} = useSelector(
    state => state.charactersState,
  );
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(getCharactersList(parameters));
  }, [parameters]);

  const handleSubmit = () => {
    console.log('Search button pressed');
    dispatch(updateParams({name: searchText}));
  };

  const handleInputChange = text => {
    setSearchText(text);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={ScreenStyle.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <ArrowLeft size="25" color={COLORS.Black} variant="Outline" />
        </Pressable>

        <View style={ScreenStyle.container}>
          <View style={searchScreenStyle.container}>
            <TextInput
              value={searchText}
              onChangeText={handleInputChange}
              style={searchScreenStyle.input}
              placeholder="Search characters"
            />
            <Pressable
              style={searchScreenStyle.searchTextContainer}
              onPress={handleSubmit}>
              <Text style={searchScreenStyle.searchText}>search</Text>
            </Pressable>
          </View>
          <FlatList
            data={characterList}
            renderItem={({item}) => <SearchItems item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchCharacters;
