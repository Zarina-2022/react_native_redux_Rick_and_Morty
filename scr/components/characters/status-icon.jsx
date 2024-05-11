import React from 'react';
import {CloseCircle, MinusCirlce, RecordCircle,} from 'iconsax-react-native';
import {statusTypes} from '../../utils/constants';
import {COLORS} from '../../theme/colors';

const StatusIcon = ({status, size}) => {
  if (status == statusTypes.ALIVE) {
    return <RecordCircle size={size} color={COLORS.Blue} variant="Bold" />;
  }
  if (status == statusTypes.DEAD) {
    return <CloseCircle size={size} color={COLORS.Red} variant="Bold" />;
  }
  if (status == statusTypes.UNKNOWN) {
    return <MinusCirlce size={size} color={COLORS.Black} variant="Outline" />;
  }
};

export default StatusIcon;