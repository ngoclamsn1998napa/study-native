import {Picker} from '@react-native-picker/picker';
import React, {useRef} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import ErrorMessage from '../../../components/ErrorMessage';
import Button from '../../../components/Button';
import i18n from '../../../i18n';
import AuthLayout from '../../../layouts/AuthLayout';
import {COLORS} from '../../../util/colors';
import {REGEX} from '../../../util/regex';
import {useDispatch, useSelector} from 'react-redux';
import {authSelector, signUp} from '../../../redux/authSlice';
import {unwrapResult} from '@reduxjs/toolkit';

const RegisterScreen = ({navigation}) => {
  const {isLoading} = useSelector(authSelector);

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    watch,
  } = useForm({
    mode: 'onChange',
  });
  const password = useRef({});
  const domainCodeRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  password.current = watch('password', '');
  const onSubmit = async data => {
    const body = {
      email: data.email,
      password: data.password,
      domain_code: data.domain_code,
    };
    console.log(body);
    try {
      const actionResult = await dispatch(signUp(body));

      const response = unwrapResult(actionResult);

      if (response.data.access_token) {
        navigation.navigate('MainLayout');
      }
    } catch (error) {
      console.log('aaa', error);
    }
  };

  return (
    <AuthLayout>
      <View style={styles.container}>
        <View style={styles.col}>
          <View>
            <Controller
              control={control}
              rules={{
                required: i18n.t('emailRequired'),
                pattern: {
                  value: REGEX.email,
                  message: i18n.t('invalidEmail'),
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    domainCodeRef.current.focus();
                  }}
                  style={styles.input}
                  placeholder={i18n.t('email')}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && <ErrorMessage message={errors.email?.message} />}
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: i18n.t('domainCodeRequired'),
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    passwordRef.current.focus();
                  }}
                  style={styles.input}
                  placeholder={i18n.t('domainCode')}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  ref={domainCodeRef}
                />
              )}
              name="domain_code"
            />
            {errors.domain_code && (
              <ErrorMessage message={errors.domain_code?.message} />
            )}
          </View>
          {/* <View>
            <Controller
              control={control}
              render={({field: {onChange, value}}) => (
                <Picker
                  style={styles.input}
                  placeholder={i18n.t('gender')}
                  selectedValue={value}
                  onValueChange={onChange}>
                  <Picker.Item label="Male" value="0" />
                  <Picker.Item label="Female" value="1" />
                </Picker>
              )}
              name="gender"
            />
          </View> */}
          <View>
            <Controller
              control={control}
              rules={{
                required: i18n.t('passwordRequired'),
                pattern: {
                  value: REGEX.password,
                  message: i18n.t('invalidPassword'),
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  returnKeyType="next"
                  onSubmitEditing={() => {
                    confirmPasswordRef.current.focus();
                  }}
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder={i18n.t('password')}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  ref={passwordRef}
                />
              )}
              name="password"
            />
            {errors.password && (
              <ErrorMessage message={errors.password?.message} />
            )}
          </View>
          <View>
            <Controller
              control={control}
              rules={{
                required: i18n.t('passwordRequired'),
                pattern: {
                  value: REGEX.password,
                  message: i18n.t('invalidPassword'),
                },
                validate: value =>
                  value === password.current || i18n.t('passwordDoMatch'),
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  returnKeyType="done"
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder={i18n.t('confirm_password')}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  ref={confirmPasswordRef}
                />
              )}
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <ErrorMessage message={errors.confirmPassword?.message} />
            )}
          </View>
          <TouchableOpacity
            disabled={!isValid}
            style={{marginBottom: 30}}
            onPress={handleSubmit(onSubmit)}>
            <Button
              disabled={!isValid}
              uppercase={true}
              title={i18n.t('sign_up')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.existAccount}>
          <Text style={styles.existAccountTextLeft}>
            {i18n.t('already_have_account')}
          </Text>
          <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.existAccountTextRight}>
              {i18n.t('sign_in')}
            </Text>
          </Pressable>
        </View>
      </View>
      {isLoading && (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    padding: 36,
  },
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  col: {
    rowGap: 20,
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

export default RegisterScreen;
