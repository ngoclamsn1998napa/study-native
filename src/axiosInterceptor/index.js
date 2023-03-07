import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Create a new Axios instance
const axiosInstance = axios.create();

// Add a request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    console.log('Request sent');

    // Add custom headers
    config.headers.common['Authorization'] =
      AsyncStorage.getItem('access_token');

    return config;
  },
  error => {
    // Do something with request error
    console.log('Request error');
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => {
    // Do something with response data
    console.log('Response received');
    return response;
  },
  error => {
    // Do something with response error
    console.log('Response error');
    return Promise.reject(error);
  },
);

export default axiosInstance;
