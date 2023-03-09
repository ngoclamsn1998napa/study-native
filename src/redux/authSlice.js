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

export const removeItemFromStorage = createAsyncThunk(
  'storage/removeItem',
  async (key, thunkAPI) => {
    try {
      await AsyncStorage.removeItem(key);
      return key;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: false,
    user: null,
    isLoading: false,
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(signIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(signIn.rejected, state => {
        state.isLoading = false;
      })
      .addCase(signIn.fulfilled, (state, {payload}) => {
        if (payload.data.access_token) {
          state.isLoggedIn = true;
          state.user = payload.data.user;
          AsyncStorage.setItem(
            'access_token',
            JSON.stringify(payload.data.access_token),
          );
        }
        state.isLoading = false;
      })
      .addCase(removeItemFromStorage.fulfilled, (state, action) => {
        state.isLoggedIn = false;
      });
  },
});

export const {setLoggedIn} = authSlice.actions;

export const authSelector = state => state.auth;

export default authSlice.reducer;
