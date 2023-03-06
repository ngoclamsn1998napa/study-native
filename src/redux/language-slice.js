import {createSlice} from '@reduxjs/toolkit';
// import i18n from '../i18n';

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    locale: 'en',
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.locale = action.payload;
    },
  },
});

export const {changeLanguage} = languageSlice.actions;
export default languageSlice.reducer;
