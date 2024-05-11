import {StyleSheet} from 'react-native';
import { COLORS } from '../../../theme/colors';

const characterCard = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.LightBrown,
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  imageContainer: {
    flex: 1,
  },
  infoContainer: {
    flex: 2,
    justifyContent: 'space-around',
  },
  image: {
    width: 100,
    height: 90,
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    textDecorationLine: 'underline',
    textDecorationColor: 'gray',
  },
  middelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  species: {
    color: COLORS.Gray,
    textTransform: 'uppercase',
    fontWeight: '400',
  },
  bottonContainer: {
    flexDirection: 'row',
    gap: 70,
  },
  status: {
    color: COLORS.Gray,
  },
  gender: {
    color: COLORS.Gray,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
});

export default characterCard;
