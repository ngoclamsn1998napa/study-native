import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';
import {COLORS} from '../../util/colors';

const Button = ({title, uppercase, disabled}) => {
  const theme = useColorScheme();
  const styles = styling(theme);
  return (
    <View
      style={[
        styles.container,
        uppercase && styles.uppercase,
        disabled && styles.disabled,
      ]}>
      <Text style={styles.name}>{title}</Text>
    </View>
  );
};

const styling = theme =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 54,
      borderRadius: 40,
      backgroundColor: COLORS[theme]?.primary,
    },
    uppercase: {
      textTransform: 'uppercase',
    },
    disabled: {
      backgroundColor: COLORS[theme].lightGreen,
    },
    name: {
      fontSize: 20,
      fontWeight: 700,
      color: COLORS[theme].white,
    },
  });

export default Button;
