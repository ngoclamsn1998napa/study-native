import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CircularProgress from '../../components/CircularProgress';
import {COLORS} from '../../util/colors';

const QaScreen = () => {
  return (
    <View style={styles.container}>
      <CircularProgress size={270} strokeWidth={30} progressPercent={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default QaScreen;
