import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {buttonStyle} from './style';

const CustomButtom = ({title, onPress, BgColor, titleColor}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle.container, {backgroundColor: BgColor}]}>
      <Text style={[buttonStyle.text, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButtom;
