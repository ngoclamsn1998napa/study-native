/**
 * @format
 */

import {AppRegistry, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {COLORS} from './src/util/colors';
const RNRedux = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <StatusBar backgroundColor={COLORS.primary3} />
      <App />
    </PersistGate>
  </Provider>
);
AppRegistry.registerComponent(appName, () => RNRedux);
