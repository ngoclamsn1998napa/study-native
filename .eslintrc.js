module.exports = {
  root: true,
  extends: '@react-native-community',
  'react/no-unstable-nested-components': [
    'off' | 'warn' | 'error',
    {
      allowAsProps: true | false,
      customValidators:
        [] /* optional array of validators used for propTypes validation */,
    },
  ],
};
