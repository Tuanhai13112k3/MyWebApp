import axios from "axios";

const BASE_API = "https://jsonplaceholder.typicode.com";
const axiosClient = axios.create({
  baseURL: BASE_API,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});
axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    return response?.data ?? response;
  },
  (error) => {
    if (error?.response.status === 401) {
      localStorage.removeItem("access_token");
    }
    const message =
      error.response?.data?.message || error.message || "Có lỗi xảy ra";
    return Promise.reject(new Error(message));
  }
);
export default axiosClient;
