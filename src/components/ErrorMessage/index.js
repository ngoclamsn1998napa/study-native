import React from 'react';
import {Text, StyleSheet} from 'react-native';

const ErrorMessage = ({message}) => {
  return <Text style={styles.message}>{message}</Text>;
};

const styles = StyleSheet.create({
  message: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});

export default ErrorMessage;
