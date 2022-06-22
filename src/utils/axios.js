import axios from 'axios';
import asyncStorage from '@react-native-async-storage/async-storage';

import { SERVER_URI } from '../redux/consts';

const axiosInstance = axios.create({
  baseURL: SERVER_URI,
});

axiosInstance.interceptors.request.use(async function (config) {
  const token = await asyncStorage.getItem('token');

  if (!token) return config;

  config.headers['token'] = token;

  return config;
});

export default axiosInstance;
