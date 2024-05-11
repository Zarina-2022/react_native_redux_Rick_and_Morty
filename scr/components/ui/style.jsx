import {StyleSheet} from 'react-native';
import { COLORS } from '../../theme/colors';

export const buttonStyle = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.Blue,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal:10,
    marginVertical:5
  },
  text: {
    fontWeight: '400',
    color:COLORS.Black,
    fontSize:18,
    letterSpacing:2
  },
});