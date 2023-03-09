import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {COLORS} from '../../util/colors';

const ChartScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chart Screen</Text>
      <Text style={styles.text}>Coming Soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default ChartScreen;
