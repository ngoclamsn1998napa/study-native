import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../../../util/colors';

const ChartTitle = ({title}) => {
  return <Text style={styles.h1}>{title}</Text>;
};

const styles = StyleSheet.create({
  h1: {
    color: COLORS.blueBlack,
    fontSize: 20,
    fontWeight: 700,
    marginTop: 16,
    marginBottom: 16,
  },
});

export default ChartTitle;
