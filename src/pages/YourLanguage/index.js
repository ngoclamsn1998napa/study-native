import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Button from '../../components/Button';
import Language from '../../components/Language';
import AuthLayout from '../../layouts/AuthLayout';
import {COLORS} from '../../util/colors';
import i18n from '../../i18n';
import {useDispatch, useSelector} from 'react-redux';
import {changeLanguage} from '../../redux/language-slice';
import AsyncStorage from '@react-native-async-storage/async-storage';

const YourLanguageScreen = ({navigation}) => {
  useSelector(state => state.language.locale);
  const dispatch = useDispatch();
  const onHandleChangeLanguage = language => {
    i18n.locale = language;
    AsyncStorage.setItem('appLanguage', language);
    dispatch(changeLanguage(language));
  };

  return (
    <AuthLayout>
      <View style={styles.container}>
        <View style={styles.box}>
          <View>
            <View style={styles.center}>
              <Text style={styles.h1}>{i18n.t('choose_your_lang')}</Text>
            </View>
            <View style={styles.row}>
              <Language
                lang="vi"
                currentLang={i18n.locale}
                title={i18n.t('vi')}
                onChangeLang={() => onHandleChangeLanguage('vi')}
              />
              <Language
                lang="en"
                currentLang={i18n.locale}
                title={i18n.t('en')}
                onChangeLang={() => onHandleChangeLanguage('en')}
              />
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Button uppercase={true} title={i18n.t('get_started')} />
          </TouchableOpacity>
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: COLORS.white,
  },
  center: {
    alignItems: 'center',
  },
  box: {flex: 1, justifyContent: 'space-between', width: '100%'},
  row: {rowGap: 20, width: '100%'},
  h1: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 30,
    color: COLORS.primary,
  },
});

export default YourLanguageScreen;
