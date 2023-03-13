import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer, PERSIST} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import languageReducer from './languageSlice';
import authReducer from './authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  language: languageReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
