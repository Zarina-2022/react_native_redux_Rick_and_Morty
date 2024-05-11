import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { COLORS } from '../../theme/colors';

const Spinner = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={COLORS.Red}/>
      <Text>Loading ...</Text>
    </View>
  );
};

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
