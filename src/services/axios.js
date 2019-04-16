import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/';
const pathnames = {
  getToken: '',
};
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  res => Promise.resolve(res.data),
  err => {
    if (err && err.response && err.response.status === 401 && !err.config._retry) {
      const originalRequest = err.config;
      originalRequest._retry = true;
      return axiosInstance
        .post(pathnames.getToken(), {})
        .then(data => {
          const token = data.access_token;
          axiosInstance.defaults.headers.common.Authorization = token;
          originalRequest.headers.Authorization = token;
          return axiosInstance(originalRequest);
        })
        .catch(Promise.reject);
    }
    if (err && err.response && err.response.data) {
      return Promise.reject(err.response.data);
    }
    return Promise.reject(err);
  }
);
