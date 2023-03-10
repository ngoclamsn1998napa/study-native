import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useColorScheme,
} from 'react-native';
import {COLORS} from '../../util/colors';
const vi = '../../assets/vi_flag.png';
const en = '../../assets/en_flag.png';

const Language = ({currentLang, lang, onChangeLang, title}) => {
  const theme = useColorScheme();

  const styles = styling(theme);
  return (
    <Pressable
      style={[styles.container, currentLang === lang && styles.active]}
      onPress={onChangeLang}>
      {lang === 'vi' && <Image source={require(vi)} />}
      {lang === 'en' && <Image source={require(en)} />}
      <View style={styles.info}>
        <Text style={styles.name}>{title}</Text>
        {currentLang === lang && (
          <View>
            <Image
              width={24}
              height={24}
              source={require('../../assets/icons/check_circle.png')}
            />
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styling = theme =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      columnGap: 10,
      padding: 20,
      borderRadius: 12,
      backgroundColor: COLORS[theme]?.gray,
      height: 80,
      width: '100%',
    },
    active: {
      backgroundColor: COLORS[theme]?.primary3,
    },
    info: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    name: {
      fontSize: 20,
      fontWeight: 400,
    },
  });

export default Language;
