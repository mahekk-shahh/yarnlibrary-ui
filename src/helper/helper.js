import url from "@/components/url";
import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: url,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401) {
      // Optional: show message to user
      return Promise.reject(error);
    }
    if (
      error.response.status === 419 &&
      error.response.data.message === "Token Expired" &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const newToken = await refreshToken();
      localStorage.setItem("token", newToken);

      originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
      return api(originalRequest);
    }
    return Promise.reject(error);
  },
);

const refreshToken = async () => {
  const response = await api.post(`${url}/refresh`);
  return response.data.token;
};

export default api;
