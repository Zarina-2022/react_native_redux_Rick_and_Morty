import {StyleSheet} from 'react-native';
import {COLORS} from '../../theme/colors';

export const characterDetailsStyle = StyleSheet.create({
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    backgroundColor: COLORS.ScreenBgColor,
  },
  img: {
    width: 200,
    height: 200,
    borderRadius: 500,
    borderWidth: 3,
  },
  name: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aliveStatus: {
    position: 'absolute',
    top: 185,
    borderRadius: 5,
    backgroundColor: COLORS.Green,
  },
  deadStatus: {
    position: 'absolute',
    top: 185,
    borderRadius: 5,
    backgroundColor: COLORS.Red,
  },
  unknownStatus: {
    position: 'absolute',
    top: 185,
    borderRadius: 5,
    backgroundColor: COLORS.Gray,
  },
  status: {
    textTransform: 'uppercase',
    color: COLORS.White,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  aliveStatusImage: {
    borderColor: COLORS.Green,
  },
  deadStatusImage: {
    borderColor: COLORS.Red,
  },
  unknownStatusImage: {
    borderColor: COLORS.Gray,
  },
  sectionContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    color: COLORS.Gray,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    alignSelf: 'center',
  },
  sectionInfoContainer: {
    flexDirection: 'row',
    gap: 5,
    marginVertical: 5,
  },
  sectionSubtitleContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: COLORS.LightBrown,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionSubtitleText: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: COLORS.Gray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  sectionSubinfoContainer: {
    flex: 2,
    borderRadius: 5,
    backgroundColor: COLORS.lightGray,
  },
  sectionSubinfoText: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: COLORS.Gray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  sectionIconontainer: {
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: 50,
    height: 1,
    backgroundColor: COLORS.Gray,
  },
  episodes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 338,
    paddingHorizontal: 10,
  },
  sectionEpisodeText: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: COLORS.DarkGray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  sectionDateText: {
    color: COLORS.Gray,
    paddingVertical: 5,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontSize: 12,
  },
});

export const filterStyle = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  title: {
    fontSize: 18,
    color: COLORS.Gray,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  titleInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.LightBrown,
    paddingVertical: 10,
    paddingHorizontal: 5,
    margin: 3,
    borderRadius: 5,
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
  },
});

export const searchScreenStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  input: {
    backgroundColor: COLORS.White,
    width: 341,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.Red,
    fontSize: 18,
    padding: 10,
  },
  searchTextContainer: {
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.Red,
    borderRadius: 10,
    position:'absolute',
    right:6
  },
  searchText: {
    color: COLORS.White,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center', 
  },
});
