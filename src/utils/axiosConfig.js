import axios from 'axios';

const createInstance = () => axios.create({
  // baseURL : base-url goes here
})

const axiosInstance = createInstance();

axiosInstance.interceptors.request.use((config) => {
  config.headers.Accept = 'application/json'
  return config;
})

axiosInstance.interceptors.response.use(res => {
  return res;
})

export default axiosInstance;