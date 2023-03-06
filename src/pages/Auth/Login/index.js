import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Button from '../../../components/Button';
import i18n from '../../../i18n';
import AuthLayout from '../../../layouts/AuthLayout';
import {COLORS} from '../../../util/colors';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // code to handle login
  };

  return (
    <AuthLayout>
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            placeholder={i18n.t('email')}
            onChangeText={text => setEmail(text)}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder={i18n.t('password')}
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={password}
          />
          <View style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>
              {i18n.t('forgot_password')}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={{marginBottom: 30}} onPress={handleLogin}>
          <Button uppercase={true} title={i18n.t('login')} />
        </TouchableOpacity>
        <View style={styles.existAccount}>
          <Text style={styles.existAccountTextLeft}>
            Don't have an account?
          </Text>
          <Text style={styles.existAccountTextRight}>Sign Up</Text>
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 36,
  },
  forgotPassword: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: COLORS.orange2,
    fontWeight: 700,
    fontSize: 17,
    marginBottom: 30,
  },
  existAccount: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    columnGap: 8,
  },
  existAccountTextLeft: {
    fontSize: 17,
    color: COLORS.blueBlack,
    marginBottom: 4,
  },
  existAccountTextRight: {
    color: COLORS.blueBlack,
    fontWeight: 700,
    fontSize: 24,
  },
  input: {
    paddingTop: 16,
    paddingRight: 20,
    paddingBottom: 16,
    paddingLeft: 20,
    marginBottom: 30,
    borderRadius: 12,
    height: 50,
    backgroundColor: '#F0F4F9',
  },
});

export default LoginScreen;
