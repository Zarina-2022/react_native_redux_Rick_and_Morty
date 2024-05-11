import {
  Image,
  Linking,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ScreenStyle} from '../../styles/general-style';
import {useDispatch, useSelector} from 'react-redux';
import {getCharactersDetails, resetData} from '../../redux/actions/characters-actions';
import Spinner from '../../components/ui/spinner';
import {characterDetailsStyle} from './styles';
import {ArrowDown2, ArrowLeft} from 'iconsax-react-native';
import {COLORS} from '../../theme/colors';
import {statusTypes} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';

const CharachterDetails = ({route, item}) => {
  const {characterID} = route?.params;
  const dispatch = useDispatch();
  const {pendingDetails, characterDetails} = useSelector(
    state => state.charactersState,
  );
  const [showSpinner, setShowSpinner] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getCharactersDetails(characterID));
    return () => {
        // bulundugumuz sayfadan ciktigimizda sayfa sifirlanacak:
        dispatch(resetData());
    };
  }, []);

  useEffect(() => {
    if (!pendingDetails) {
      const timeout = setTimeout(() => {
        setShowSpinner(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, []);

  // Date
  const formatDate = isoDate => {
    const date = new Date(isoDate);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={ScreenStyle.container}>
        {showSpinner ? (
          <Spinner />
        ) : (
          <ScrollView>
            <Pressable onPress={() => navigation.goBack()}>
              <ArrowLeft size="25" color={COLORS.Black} variant="Outline" />
            </Pressable>
            <View style={characterDetailsStyle.imageContainer}>
              <Image
                style={[
                  characterDetailsStyle.img,
                  characterDetails.status == statusTypes.ALIVE
                    ? characterDetailsStyle.aliveStatusImage
                    : characterDetails.status == statusTypes.DEAD
                    ? characterDetailsStyle.deadStatusImage
                    : characterDetailsStyle.unknownStatusImage,
                ]}
                source={{uri: characterDetails.image}}
              />
              <View
                style={
                  characterDetails.status == statusTypes.ALIVE
                    ? characterDetailsStyle.aliveStatus
                    : characterDetails.status == statusTypes.DEAD
                    ? characterDetailsStyle.deadStatus
                    : characterDetailsStyle.unknownStatus
                }>
                <Text style={characterDetailsStyle.status}>
                  {characterDetails.status}
                </Text>
              </View>
            </View>
            <View>
              <Text style={characterDetailsStyle.name}>
                {characterDetails.name}
              </Text>
            </View>

            {/* Properties */}

            <View style={characterDetailsStyle.sectionContainer}>
              <View style={characterDetailsStyle.titleContainer}>
                <View style={characterDetailsStyle.line} />
                <View style={characterDetailsStyle.sectionContainer}>
                  <Text style={characterDetailsStyle.sectionTitle}>
                    PROPERTIES
                  </Text>
                </View>
                <View style={characterDetailsStyle.line} />
              </View>

              <View style={characterDetailsStyle.sectionInfoContainer}>
                <View style={characterDetailsStyle.sectionSubtitleContainer}>
                  <Text style={characterDetailsStyle.sectionSubtitleText}>
                    Gender
                  </Text>
                </View>
                <View style={characterDetailsStyle.sectionSubinfoContainer}>
                  <Text style={characterDetailsStyle.sectionSubinfoText}>
                    {characterDetails.gender}
                  </Text>
                </View>
              </View>

              <View style={characterDetailsStyle.sectionInfoContainer}>
                <View style={characterDetailsStyle.sectionSubtitleContainer}>
                  <Text style={characterDetailsStyle.sectionSubtitleText}>
                    Species
                  </Text>
                </View>
                <View style={characterDetailsStyle.sectionSubinfoContainer}>
                  <Text style={characterDetailsStyle.sectionSubinfoText}>
                    {characterDetails.species}
                  </Text>
                </View>
              </View>

              <View style={characterDetailsStyle.sectionInfoContainer}>
                <View style={characterDetailsStyle.sectionSubtitleContainer}>
                  <Text style={characterDetailsStyle.sectionSubtitleText}>
                    Status
                  </Text>
                </View>
                <View style={characterDetailsStyle.sectionSubinfoContainer}>
                  <Text style={characterDetailsStyle.sectionSubinfoText}>
                    {characterDetails.status}
                  </Text>
                </View>
              </View>
            </View>

            {/* Whereabout */}

            <View style={characterDetailsStyle.sectionContainer}>
              <View style={characterDetailsStyle.titleContainer}>
                <View style={characterDetailsStyle.line} />
                <View style={characterDetailsStyle.sectionContainer}>
                  <Text style={characterDetailsStyle.sectionTitle}>
                    WHEREABOUT
                  </Text>
                </View>
                <View style={characterDetailsStyle.line} />
              </View>

              <View style={characterDetailsStyle.sectionInfoContainer}>
                <View style={characterDetailsStyle.sectionSubtitleContainer}>
                  <Text style={characterDetailsStyle.sectionSubtitleText}>
                    Origin
                  </Text>
                </View>
                <View style={characterDetailsStyle.sectionSubinfoContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={characterDetailsStyle.sectionSubinfoText}>
                      {characterDetails.origin.name}
                    </Text>
                    <Pressable
                      style={characterDetailsStyle.sectionIconontainer}
                      onPress={() => {
                        if (characterDetails.origin.url) {
                          Linking.openURL(characterDetails.origin.url);
                        }
                      }}>
                      <ArrowDown2 size="25" color="#697689" variant="Bold" />
                    </Pressable>
                  </View>
                </View>
              </View>

              <View style={characterDetailsStyle.sectionInfoContainer}>
                <View style={characterDetailsStyle.sectionSubtitleContainer}>
                  <Text style={characterDetailsStyle.sectionSubtitleText}>
                    Location
                  </Text>
                </View>

                <View style={characterDetailsStyle.sectionSubinfoContainer}>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={characterDetailsStyle.sectionSubinfoText}>
                      {characterDetails.location.name}
                    </Text>
                    <Pressable
                      style={characterDetailsStyle.sectionIconontainer}
                      onPress={() => {
                        if (characterDetails.origin.url) {
                          Linking.openURL(characterDetails.location.url);
                        }
                      }}>
                      <ArrowDown2 size="25" color="#697689" variant="Bold" />
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>

            {/* Featured Chapters */}
            <View style={characterDetailsStyle.sectionContainer}>
              <View style={characterDetailsStyle.titleContainer}>
                <View style={characterDetailsStyle.line} />
                <View style={characterDetailsStyle.sectionContainer}>
                  <Text style={characterDetailsStyle.sectionTitle}>
                    FEATURED CHAPTERS
                  </Text>
                </View>
                <View style={characterDetailsStyle.line} />
              </View>

              <View style={characterDetailsStyle.sectionSubinfoContainer}>
                <View style={characterDetailsStyle.episodes}
                >
                  <Pressable onPress={() => {Linking.openURL(characterDetails.url)}}>
                    <Text style={characterDetailsStyle.sectionEpisodeText}>S01E01</Text>
                  </Pressable>

                  <Text style={characterDetailsStyle.sectionDateText}>{formatDate(characterDetails.created)}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CharachterDetails;
