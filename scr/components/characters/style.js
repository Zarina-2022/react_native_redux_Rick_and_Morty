import {StyleSheet} from 'react-native';
import { COLORS } from '../../theme/colors';

export const searchStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.LightBrown,
    margin: 5,
    padding: 15,
    borderRadius: 10,
    justifyContent:'space-between'
  },
  searchList:{
    fontSize:18,
    fontWeight:'500',
  }
});
