import {FlatList, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenStyle} from '../../styles/general-style';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCharactersList,
  loadMoreCharacters,
} from '../../redux/actions/characters-actions';
import Spinner from '../../components/ui/spinner';
import CharacterCard from '../../components/characters/character-card/character-card';

const Characters = () => {
  const dispatch = useDispatch();
  const {characterList, pending, parameters} = useSelector(
    state => state.charactersState,
  );
  const [showSpinner, setShowSpinner] = useState(true);
  const [showFooterSpinner, setShowFooterSpinner] = useState(false);

  useEffect(() => {
    dispatch(getCharactersList(parameters));
    if (!pending) {
      const timeout = setTimeout(() => {
        setShowSpinner(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, []);

  useEffect(() => {
    if (characterList.length === 0) {
      setShowFooterSpinner(true);
    } else {
      setShowFooterSpinner(false);
    }
  }, [characterList]);

  const handleLoadMore = () => {
    dispatch(loadMoreCharacters(parameters));
  };

  return (
    <View style={ScreenStyle.container}>
      {showSpinner ? (
        <Spinner />
      ) : (
        <FlatList
          data={characterList}
          renderItem={({item}) => <CharacterCard item={item} />}
          keyExtractor={item => item.id.toString()}
          onEndReachedThreshold={0.5} // sayfanin ortasina kadar yukler ve buraya geldiginde:
          onEndReached={handleLoadMore} // bu kod ile geri kalan veriyi yukler.
          ListFooterComponent={showFooterSpinner ? <Spinner /> : null}
        />
      )}
    </View>
  );
};

export default Characters;
