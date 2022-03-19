import axios from 'axios';

const baseURL = 'https://api.m3o.com/v1/memegen';
const token = 'Bearer OThhOWFmMzQtYzkyYi00Nzc4LTgwYWUtMzgxNzk4NGMxODBj'

const api = axios.create({
  baseURL,
});

api.interceptors.request.use(
  async (config) => {
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = token;
    return config;
  },
  (error) => Promise.reject(error),
);

export default api;
