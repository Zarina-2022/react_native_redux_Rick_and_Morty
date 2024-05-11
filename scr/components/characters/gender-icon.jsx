import React from 'react';
import { Man, MinusCirlce, Woman} from 'iconsax-react-native';
import {genderTypes} from '../../utils/constants';
import {COLORS} from '../../theme/colors';

const GenderIcon = ({gender, size}) => {
  if (gender == genderTypes.MALE) {
    return <Man size={size} color={COLORS.Black} />;
  }
  if (gender == genderTypes.FEMALE) {
    return <Woman size={size} color={COLORS.Black} />;
  }
  if (gender == genderTypes.UNKNOWN) {
    return <MinusCirlce size={size} color={COLORS.Black} />;
  }
};

export default GenderIcon;
