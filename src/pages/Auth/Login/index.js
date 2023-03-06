import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
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
import {REGEX} from '../../../util/regex';

const LoginScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors, dirtyFields},
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = data => {
    console.log(data);
  };

  const isFormEmpty = Object.keys(dirtyFields).length === 0;
  return (
    <AuthLayout>
      <View style={styles.container}>
        <View style={styles.col}>
          <View>
            <Controller
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: REGEX.email,
                  message: 'Please enter a valid email',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder={i18n.t('email')}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && <Text>{errors.email?.message}</Text>}
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: 'Password is required',
                pattern: {
                  value: REGEX.password,
                  message: 'Minimum 8 characters',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder={i18n.t('password')}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="password"
            />
            {errors.password && <Text>{errors.password?.message}</Text>}
          </View>
          <View style={styles.forgotPassword}>
            <Text style={styles.forgotPasswordText}>
              {i18n.t('forgot_password')}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          disabled={isFormEmpty}
          style={{marginBottom: 30}}
          onPress={handleSubmit(onSubmit)}>
          <Button
            disabled={isFormEmpty}
            uppercase={true}
            title={i18n.t('login')}
          />
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
  col: {
    rowGap: 30,
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
    borderRadius: 12,
    height: 50,
    backgroundColor: '#F0F4F9',
  },
});

export default LoginScreen;
