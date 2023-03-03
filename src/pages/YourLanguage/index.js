import React from 'react';
import {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../../components/Button';
import Language from '../../components/Language';
import AuthLayout from '../../layouts/AuthLayout';
import {COLORS} from '../../util/colors';

const YourLanguageScreen = () => {
  const [lang, setLang] = useState('vi');
  return (
    <AuthLayout>
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'space-between', width: '100%'}}>
          <View>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.h1}>Choose your language</Text>
            </View>
            <View style={styles.row}>
              <Language
                lang="vi"
                title="Vietnamese"
                currentLang={lang}
                onChangeLang={() => setLang('vi')}
              />
              <Language
                lang="en"
                title="English"
                currentLang={lang}
                onChangeLang={() => setLang('en')}
              />
            </View>
          </View>
          <View>
            <Button title="GET STARTED" />
          </View>
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
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  row: {rowGap: 20, width: '100%'},
  h1: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 30,
    color: COLORS.primary,
  },
});

export default YourLanguageScreen;
