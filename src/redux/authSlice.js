import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import AuthService from '../apis/auth';

export const signIn = createAsyncThunk(
  'auth/fetchsignIn',
  async (body, {rejectWithValue}) => {
    try {
      const response = await AuthService.login(body);
      return response;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthenticated: !!AsyncStorage.getItem('access_token'),
    user: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signIn.pending, state => {
        state.loading = true;
      })
      .addCase(signIn.rejected, state => {
        state.loading = false;
      })
      .addCase(signIn.fulfilled, (state, {payload}) => {
        if (payload.data.access_token) {
          state.isLoggedIn = true;
          AsyncStorage.setItem('access_token', payload.data.access_token);
        }
        state.loading = false;
      });
  },
});

export const authSelector = state => state.auth;

export default authSlice.reducer;
