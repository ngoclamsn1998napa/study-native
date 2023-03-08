import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {COLORS} from '../../util/colors';

const TabBar = ({title}) => {
  return (
    <View style={[styles.container]}>
      {/* <Image source={require(icon)} /> */}
      <Text style={styles.name}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 8,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  disabled: {
    backgroundColor: COLORS.lightGreen,
  },
  name: {
    fontSize: 13,
    fontWeight: 400,
    color: COLORS.gray,
  },
});

export default TabBar;
