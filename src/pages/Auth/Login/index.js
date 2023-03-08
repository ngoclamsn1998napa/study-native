import {unwrapResult} from '@reduxjs/toolkit';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import {useDispatch} from 'react-redux';
import Button from '../../../components/Button';
import i18n from '../../../i18n';
import AuthLayout from '../../../layouts/AuthLayout';
import {signIn} from '../../../redux/authSlice';
import {COLORS} from '../../../util/colors';
import {REGEX} from '../../../util/regex';

const LoginScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
  } = useForm({
    mode: 'onChange',
  });
  const onSubmit = async data => {
    console.log(data);
    try {
      const actionResult = await dispatch(
        signIn({email: data.email, password: data.password}),
      );

      const response = unwrapResult(actionResult);

      if (response.data.access_token) {
        navigation.navigate('MainLayout');
      }
    } catch (error) {}
  };
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
                  secureTextEntry={true}
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
          disabled={!isValid}
          style={{marginBottom: 30}}
          onPress={handleSubmit(onSubmit)}>
          <Button
            disabled={!isValid}
            uppercase={true}
            title={i18n.t('login')}
          />
        </TouchableOpacity>
        <View style={styles.existAccount}>
          <Text style={styles.existAccountTextLeft}>
            {i18n.t('dont_have_an_account')}
          </Text>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={styles.existAccountTextRight}>
              {i18n.t('sign_up')}
            </Text>
          </Pressable>
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
    rowGap: 20,
  },
  forgotPassword: {
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: COLORS.orange2,
    fontWeight: 700,
    fontSize: 17,
    marginBottom: 20,
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
