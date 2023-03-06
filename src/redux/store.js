import {configureStore} from '@reduxjs/toolkit';
import languageReducer from './language-slice';

const store = configureStore({
  reducer: {
    language: languageReducer,
  },
});

export default store;
