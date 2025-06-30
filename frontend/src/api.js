import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const apiUrl =
  import.meta.env.VITE_API_URL || "/choreo-apis/djangopractices/backend/v1";
const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
