import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {COLORS} from '../../util/colors';

const Button = ({currentLang, lang, onChangeLang, title}) => {
  return (
    <Pressable style={[styles.container]} onPress={onChangeLang}>
      <View style={styles.box}>
        <Text style={styles.name}>{title}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    columnGap: 10,
    padding: 20,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    borderRadius: 40,
    backgroundColor: COLORS.primary,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: COLORS.white,
  },
});

export default Button;
