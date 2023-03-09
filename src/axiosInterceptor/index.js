import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const baseURL = 'https://dev.fuku-sin.jp/api/';
const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    'content-type': 'application/json',
  },
});

axiosClient.interceptors.request.use(async config => {
  const customHeaders = {
    Authorization: '',
  };
  const token = await AsyncStorage.getItem('access_token');
  if (token) {
    customHeaders.Authorization = `Bearer ${JSON.parse(token)}`;
  }

  return {
    ...config,
    headers: {
      ...customHeaders, // auto attach token
      ...config.headers, // but you can override for some requests
    },
  };
});

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 401) {
      AsyncStorage.removeItem('access_token');
    } else {
      throw error.response;
    }
  },
);

export default axiosClient;
