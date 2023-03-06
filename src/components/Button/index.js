import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {COLORS} from '../../util/colors';

const Button = ({title, uppercase}) => {
  return (
    <View style={[styles.container, uppercase && styles.uppercase]}>
      <Text style={styles.name}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
  },
  uppercase: {
    textTransform: 'uppercase',
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.white,
  },
});

export default Button;
