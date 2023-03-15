import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CircularProgress from '../../../components/CircularProgress';
import {COLORS} from '../../../util/colors';
import ChartTitle from '../Title';

const TotalLearnedCard = () => {
  return (
    <View style={styles.learnedChart}>
      <ChartTitle title="Total Learned Card" />
      <CircularProgress
        size={270}
        strokeWidth={30}
        progressPercent={Math.floor(Math.random() * 100)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  h1: {
    color: COLORS.blueBlack,
    fontSize: 20,
    fontWeight: 700,
    marginTop: 16,
    marginBottom: 16,
  },
  historyChart: {
    marginTop: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  learnedChart: {
    marginTop: 50,
  },
});

export default TotalLearnedCard;
