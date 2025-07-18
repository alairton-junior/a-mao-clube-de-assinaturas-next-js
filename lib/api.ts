import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true
});

// Adiciona o token automaticamente no header
api.interceptors.request.use((config) => {
  if (typeof window !== 'undefined') {
    const access = localStorage.getItem('access');
    if (access && access !== "undefined" && access !== "null") {
      config.headers.Authorization = `Bearer ${access}`;
    } else {
      delete config.headers.Authorization;
    }
  }
  return config;
});
export default api;