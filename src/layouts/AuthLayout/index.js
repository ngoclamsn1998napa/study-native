import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Keyboard,
  useColorScheme,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {COLORS} from '../../util/colors';

const AuthLayout = ({isBgFooter = true, children}) => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const theme = useColorScheme();
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current.scrollToEnd({animated: true});
  }, []);

  const styles = styling(theme);

  useEffect(() => {
    const keyboardWillShowListener = Keyboard.addListener(
      'keyboardDidShow',
      event => {
        if (scrollRef.current) {
          scrollRef.current.scrollTo({y: 272, animated: true});
        }
      },
    );

    const keyboardWillHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      },
    );

    return () => {
      keyboardWillShowListener.remove();
      keyboardWillHideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardHeight}
      style={styles.container}>
      <ScrollView ref={scrollRef} contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.inner}>
          <ImageBackground
            style={styles.headerBackground}
            source={require('../../assets/auth_logo.png')}
          />
          <View style={styles.divider}></View>
          {children}
          {isBgFooter && (
            <ImageBackground
              style={styles.footerBackground}
              source={require('../../assets/auth_footer.png')}
            />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styling = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      backgroundColor: COLORS[theme]?.white,
    },
    headerBackground: {
      width: '100%',
      height: 272,
    },
    footerBackground: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      height: 155,
      zIndex: -1,
    },
    divider: {
      borderBottomColor: COLORS.primary3,
      borderBottomWidth: 1,
      marginLeft: 36,
      marginRight: 36,
    },
    inner: {
      flex: 1,
      justifyContent: 'space-between',
      // backgroundColor: 'red',
    },
  });

export default AuthLayout;
