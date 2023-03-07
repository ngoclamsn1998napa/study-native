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
} from 'react-native';
import Button from '../../../components/Button';
import i18n from '../../../i18n';
import AuthLayout from '../../../layouts/AuthLayout';
import {COLORS} from '../../../util/colors';
import {REGEX} from '../../../util/regex';

const RegisterScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    watch,
  } = useForm({
    mode: 'onChange',
  });
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <AuthLayout>
      <View style={styles.container}>
        <View style={styles.col}>
          <View>
            <Controller
              control={control}
              rules={{
                required: 'Name is required',
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  style={styles.input}
                  placeholder={i18n.t('name')}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="name"
            />
            {errors.name && <Text>{errors.name?.message}</Text>}
          </View>
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
          <View>
            <Controller
              control={control}
              rules={{
                required: 'Password is required',
                pattern: {
                  value: REGEX.password,
                  message: 'Minimum 8 characters',
                },
                validate: value =>
                  value === password.current || 'The passwords do not match',
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  secureTextEntry={true}
                  style={styles.input}
                  placeholder={i18n.t('confirm_password')}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="confirmPassword"
            />
            {errors.confirmPassword && (
              <Text>{errors.confirmPassword?.message}</Text>
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
